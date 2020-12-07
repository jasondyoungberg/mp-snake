const http = require('http');
const ws = require('ws');
const fs = require('fs');
const express = require('express');
const dateformat = require('dateformat');
const config = JSON.parse(fs.readFileSync('config.json'));

//create http server
const app = express();
app.use((req,res,next)=>{//log request
	log(`${req.url}`,'http');
	if(req.url=='/info.js'){
		res.send(`const info = {\n\
	width:${config.map.width},\n\
	height:${config.map.height},\n\
	loop:${config.map.loop}\n\
};`);
	}else{next();}
},express.static('public'));
app.enable('etag');//enable caching
const server = http.createServer(app);

//create websocket server
const wss = new ws.Server({noServer:true});
server.on('upgrade',(req,soc,head)=>{
	wss.handleUpgrade(req,soc,head,ws=>{
		wss.emit('connection',ws,req);
	})
});

server.listen(config.port);//enable server

//setup date formatting
dateformat.masks.default = 'UTC:dd-mm-yyyy HH:MM:ss'
function log(msg,type){//log message
	var text = `[${dateformat(new Date())}] ${type}: ${msg}`;
	if(config.log.console[type])console.log(text);
	if(config.log.file[type])fs.appendFile(config.log.file.path,text+'\n',()=>{});
}

var clients = []
wss.on('connection',con=>{//handle websocket
	function send(msg,type,data){
		con.send(JSON.stringify({
			id:msg.id,
			time:Date.now(),
			type:type,
			data:data
		}))
	}
	con.on('message',data=>{
		log(data,'ws')
		try{
			var msg = JSON.parse(data);
			//TODO: handle message
		}catch(err){
			log(err,'err');
			con.send('{"type":"err"}');
		}
	});
});