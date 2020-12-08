var ws = {
	socket:new WebSocket('ws://'+window.location.host),
	send:msg=>{
		ws.socket.send(JSON.stringify(msg));
	},
	read:(callback)=>{
		while(ws.queue.length>0){
			callback(ws.queue.pop());
		}
	},
	queue:[]
}

ws.socket.onopen=ev=>{
	ws.queue.push({
		type:'open',
		ev:ev
	});
}

ws.socket.onmessage=ev=>{
	ws.queue.push({
		type:'msg',
		data:JSON.parse(ev.data),
		ev:ev
	});
}

ws.socket.onerror=ev=>{
	ws.queue.push({
		type:'error',
		ev:ev
	});
}

ws.socket.onclose=ev=>{
	ws.queue.push({
		type:'close',
		ev:ev
	});
}