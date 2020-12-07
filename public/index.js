var ele = {//All elements shorthand
	menu:document.getElementsByClassName('menu')[0],
	color_slider:document.getElementById('color'),
	game:document.getElementById('game'),
	minimap:document.getElementById('minimap')
}

//Setup hue slider
var hue = localStorage.hue;
if(!hue){
	hue=Math.floor(Math.random()*360);
	localStorage.hue = hue;
}
ele.menu.style.borderColor = `hsl(${hue},100%,50%)`;
ele.menu.style.backgroundColor = `hsla(${hue},100%,50%,50%)`;
ele.color_slider.value = hue;
ele.color_slider.addEventListener('input',ev=>{
	hue = ev.target.value;
	localStorage.hue = hue;
	ele.menu.style.borderColor = `hsl(${hue},100%,50%)`;
	ele.menu.style.backgroundColor = `hsla(${hue},100%,50%,50%)`;
})

//Setup statistics monitoring
stats = new Stats();
stats.addPanel(new Stats.Panel('','#0000','#0000'));
stats.showPanel(3);
document.body.appendChild(stats.domElement);

var canvas = {
	game:new Canvas(ele.game),
	minimap:new Canvas(ele.minimap)
}

var running = false

function loop(){//Main game loop
	stats.begin();
	canvas.game.clear();
	canvas.minimap.clear();
	if(running){}
	stats.end();
	requestAnimationFrame(loop);
}requestAnimationFrame(loop);