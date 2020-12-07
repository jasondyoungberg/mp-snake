const grid_size = 10

class Canvas {
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

	draw_circle(color,x,y){
		this.ctx.fillStyle = color;
		this.ctx.beginPath();
		this.ctx.arc(x,y,grid_size/2,0,2*Math.PI)
		this.ctx.fill();
	}

	draw_line(color,x0,y0,x1,y1){
		this.ctx.strokeStyle = color;
		this.ctx.beginPath();
		this.ctx.moveTo(x0,y0);
		this.ctx.lineTo(x1,y1);

	}

	draw_px(color,x,y){

	}
}