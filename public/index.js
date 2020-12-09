var ele = {//All elements shorthand
	menu:document.getElementsByClassName('menu')[0],
	menu_wrapper:document.getElementsByClassName('menu-wrapper')[0],
	color_slider:document.getElementById('color'),
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
	username = ele.name_textbox.value;
	localStorage.username = username;
});

//Setup statistics monitoring
stats = new Stats();
stats.addPanel(new Stats.Panel('','#0000','#0000'));
stats.showPanel(3);
document.body.appendChild(stats.domElement);

var canvas = {
	game:new Canvas(ele.game),
	minimap:new Canvas(ele.minimap)
};

var running = false;

function loop(){//Main game loop
	stats.begin();
	canvas.game.clear();
	canvas.minimap.clear();
	if(running){
		//TODO: game loop
	}
	stats.end();
	requestAnimationFrame(loop);
}requestAnimationFrame(loop);