var ele = {//All elements shorthand
	menu:document.getElementsByClassName('menu')[0],
	color_slider:document.getElementById('color')
}

//Setup hue slider
var hue = Math.floor(Math.random()*360);
ele.menu.style.borderColor = `hsl(${hue},100%,50%)`;
ele.menu.style.backgroundColor = `hsla(${hue},100%,50%,50%)`;
ele.color_slider.value = hue;
ele.color_slider.addEventListener('input',ev=>{
	hue = ev.target.value;
	ele.menu.style.borderColor = `hsl(${hue},100%,50%)`;
	ele.menu.style.backgroundColor = `hsla(${hue},100%,50%,50%)`;
})