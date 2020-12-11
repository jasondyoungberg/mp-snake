const grid_size = 40;
const grid_stroke = 2;
const snake_size = 30;

var ele = {//All elements shorthand
	menu:document.getElementsByClassName('menu')[0],
	menu_wrapper:document.getElementsByClassName('menu-wrapper')[0],
	color_slider:document.getElementById('color'),
	name_textbox:document.getElementById('name'),
	start_btn:document.getElementById('start'),
	root:document.querySelector(':root'),
	game:document.getElementById('game'),
	minimap:document.getElementById('minimap')
};

//More shorthand
var width = window.innerWidth;
var height = window.innerHeight;

//Setup hue slider
var hue = localStorage.hue;
if(!hue){
	hue=Math.floor(Math.random()*360);
	localStorage.hue = hue;
}

ele.root.style.setProperty('--hue-dark',`hsl(${hue},100%,20%)`);
ele.root.style.setProperty('--hue-normal',`hsl(${hue},100%,50%)`);
ele.root.style.setProperty('--hue-bright',`hsl(${hue},100%,80%)`);

ele.color_slider.value = hue;
ele.color_slider.addEventListener('input',ev=>{
	hue = ev.target.value;
	localStorage.hue = hue;

	ele.root.style.setProperty('--hue-dark',`hsl(${hue},100%,30%)`);
	ele.root.style.setProperty('--hue-normal',`hsl(${hue},100%,50%)`);
	ele.root.style.setProperty('--hue-bright',`hsl(${hue},100%,80%)`);
});

//Setup username input
var username = localStorage.username;
if(!username){
	username='';
	localStorage.username = username;
}
ele.name_textbox.value = username;

ele.name_textbox.addEventListener('input',e=>{
	ele.name_textbox.value=ele.name_textbox.value.replace(/([^\w ]|_)/g,'');
	ele.name_textbox.value=ele.name_textbox.value.replace(/(?<=^.{16}).*/g,'');
	username = ele.name_textbox.value;
	localStorage.username = username.replace(/ +$/);
});

//Setup statistics monitoring
stats = new Stats();
stats.addPanel(new Stats.Panel('','#0000','#0000'));
stats.showPanel(3);
document.body.appendChild(stats.domElement);

var canvas = {
	game:new GameCanvas(ele.game),
	minimap:new MinimapCanvas(ele.minimap)
};

//Listen for events that start the game
var running = false;
ele.start_btn.addEventListener('click',start);
document.addEventListener('keypress',e=>{if(e.key=='Enter')start();});

//Startup the game
function start(){
	if(/^([^\W_]| ){3,15}[^\W_]$/.test(ele.name_textbox.value)){
		running = true;
		ele.menu_wrapper.style.display = 'none';
		ws.send({
			type:'join',
			username:username,
			hue:hue,
			token:make_token()
		});
	}else{
		alert('Username must be longer 4 characters and can\'t end with space')
	}
}

//Generate token
function make_token(){
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
	for(var i=0;i<32;i++){
		result += characters.charAt(Math.floor(64*Math.random()));
	}
	return result;
};

var camera = {x:0,y:0};
var snakes = [];
var foods = [];

//Main game loop
function loop(){
	stats.begin();
	if(running){
		//TODO: game loop
		canvas.game.draw();
		canvas.minimap.draw();
	}
	stats.end();
	requestAnimationFrame(loop);
}requestAnimationFrame(loop);

function hsl(h,s,l){
	l /= 100;
	const a = s * Math.min(l, 1 - l) / 100;
	const f = n => {
		const k = (n + h / 30) % 12;
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}