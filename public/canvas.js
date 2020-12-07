class Canvas {
	constructor(ele){
		this.ctx = ele.getContext("2d")
	}

	draw_circle(fill,x,y,r){
		this.ctx.fillStyle = fill;
		this.ctx.beginPath();
		this.ctx.arc(x,y,r,0,2*Math.PI)
		this.ctx.fill();
	}

	draw_rect(fill,x0,y0,y1,y1){
		this.ctx.fillStyle = fill;
		this.ctx.fillRect(x0,y0,x1-x0,y1-y0);
	}

	draw_segment(color,x,y,start,end){
		/*
			0:Up
			1:Right
			2:Down
			3:Left
		*/

		//TODO
	}
}