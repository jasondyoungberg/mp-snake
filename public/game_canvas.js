class GameCanvas {
	constructor(ele){
		this.ele = ele;
		this.ctx = ele.getContext("2d")
		this.ctx.lineCap = "round";
		this.ctx.lineJoin = "round";
	}

	draw(){
		this.w  = window.innerWidth;
		this.h = window.innerHeight;
		this.ele.width  = this.w;
		this.ele.height = this.h;
		this.ctx.clearRect(0,0,ele.width,ele.height);

		this.ctx.lineWidth = grid_stroke;
		this.draw_grid();

		this.ctx.lineWidth = snake_size;
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