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
		snakes.map(e=>{this.draw_snake(e)});
	cord={
		x:x=>((window.innerWidth/2)+((x-camera.x)*grid_size)),
		y:y=>((window.innerHeight/2)-((y-camera.y)*grid_size))
	}

	draw_grid(){
		this.ctx.strokeStyle = "#cccccc";
		var target=camera.y+(this.h/grid_size);
		for(var i=camera.x-(this.w/grid_size);i<=camera.x+(this.w/grid_size);i++){
			var cord = this.cord.x(i);
			this.ctx.beginPath();
			this.ctx.moveTo(cord,0);
			this.ctx.lineTo(cord,this.h);
			this.ctx.stroke();
		}

		var target=camera.y+(this.h/grid_size);
		for(var i=camera.y-(this.h/grid_size);i<=target;i++){
			var cord = this.cord.y(i);
			this.ctx.beginPath();
			this.ctx.moveTo(0,cord);
			this.ctx.lineTo(this.w,cord);
			this.ctx.stroke();
		}
	}

	draw_snake(snake){
		//TODO
	}

	draw_food(food){
		//TODO
	}
}