class GameCanvas {
	constructor(ele){
		this.ele = ele;
		this.ctx = ele.getContext("2d")
		this.ctx.lineWidth = 0.75*grid_size
	}

	clear(){
		this.ele.width  = window.innerWidth;
		this.ele.height = window.innerHeight;
		this.ctx.clearRect(0,0,ele.width,ele.height);
	}

	draw(){
		this.draw_grid();
		foods.map(this.draw_food);
		snakes.map(this.draw_snake);
	}

	cord={
		x:x=>((window.innerWidth/2)+((x-camera.x)*grid_size)),
		y:y=>((window.innerHeight/2)-((y-camera.y)*grid_size))
	}

	draw_grid(){
		//TODO
	}

	draw_snake(snake){
		//TODO
	}

	draw_food(food){
		//TODO
	}
}