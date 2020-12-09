class MinimapCanvas {
	constructor(ele){
		this.ele = ele;
		this.ctx = ele.getContext("2d")
		this.ctx.lineWidth = grid_size
	}

	clear(){
		ele.width  = window.innerWidth;
		ele.height = window.innerHeight;
		this.ctx.clearRect(0,0,ele.width,ele.height);
	}

	draw(){
		this.draw_grid();
		foods.map(this.draw_food);
		snakes.map(this.draw_snake);
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