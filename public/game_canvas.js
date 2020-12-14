class GameCanvas {
	constructor(ele){
		this.ele = ele;
		this.ctx = ele.getContext("2d");
	}

	draw(){
		this.w  = window.innerWidth;
		this.h = window.innerHeight;
		this.ele.width  = this.w;
		this.ele.height = this.h;
		this.ctx.clearRect(0,0,ele.width,ele.height);

		this.ctx.lineWidth = grid_stroke;
		this.draw_grid();

		this.ctx.lineWidth = food_size;
		foods.map(e=>{this.draw_food(e)});
		this.ctx.lineWidth = snake_size;
		snakes.map(e=>{this.draw_snake(e)});
	}

	cord={
		x:x=>((window.innerWidth/2)+((x-camera.x)*grid_size)),
		y:y=>((window.innerHeight/2)-((y-camera.y)*grid_size))
	}

	draw_grid(){
		this.ctx.strokeStyle = "#cccccc";
		var target=Math.floor(this.w/grid_size)+3.5;
		for(var i=-Math.floor(this.w/grid_size)-3.5;i<=target;i++){
			if(Math.abs(i)<=map_size){
				var cord = this.cord.x(i);
				this.ctx.beginPath();
				this.ctx.moveTo(cord,0);
				this.ctx.lineTo(cord,this.h);
				this.ctx.stroke();
			}
		}

		var target=Math.floor(this.h/grid_size)+3.5;
		for(var i=-Math.floor(this.h/grid_size)-3.5;i<=target;i++){
			if(Math.abs(i)<=map_size){
				var cord = this.cord.y(i);
				this.ctx.beginPath();
				this.ctx.moveTo(0,cord);
				this.ctx.lineTo(this.w,cord);
				this.ctx.stroke();
			}
		}

		this.ctx.fillStyle = '#cccccc'
		this.ctx.fillRect(0,0,this.w,this.cord.y(map_size-0.5));
		this.ctx.fillRect(0,this.cord.y(0.5-map_size),this.w,this.h);
		this.ctx.fillRect(0,0,this.cord.x(0.5-map_size),this.h);
		this.ctx.fillRect(this.cord.x(map_size-0.5),0,this.w,this.h);
	}

	draw_snake(snake){
		this.ctx.beginPath();
		var body = snake.bodyT(t);
		if(body.length == 0)return;
		if(body.length == 1){
			this.ctx.fillStyle = hsl(snake.hue,100,50);
			this.ctx.arc(
				this.cord.x(body[0].x),
				this.cord.y(body[0].y),
				snake_size * (1-(t%1)) / 2,
				0,2*Math.PI
			);
			this.ctx.fill();
		}else{
			this.ctx.strokeStyle = hsl(snake.hue,100,50);
			this.ctx.lineCap = "round";
			this.ctx.lineJoin = "round";
			this.ctx.moveTo(
				this.cord.x(body[0].x),
				this.cord.y(body[0].y)
			);
			body.map(e=>{
				this.ctx.lineTo(
					this.cord.x(e.x),
					this.cord.y(e.y)
				);
			});
			this.ctx.stroke();
		}
	}

	draw_food(food){
		this.ctx.strokeStyle = hsl(food.hue,100,50);
		var x = this.cord.x(food.x);
		var y = this.cord.y(food.y);
		this.ctx.beginPath();
		this.ctx.lineCap = "round";
		this.ctx.moveTo(x,y);
		this.ctx.lineTo(x,y);
		this.ctx.stroke();
	}
}