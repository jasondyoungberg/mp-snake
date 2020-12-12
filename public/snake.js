class Snake{
	constructor(username,hue,body,dir){
		this.username = username;
		this.hue = hue;
		this.body = body;
		this.x = body[0].x;
		this.y = body[0].y;
		this.dir = dir;
		this.dirQ = dir;
		this.dirX = 0;
		this.dirY = 0;
		this.tick = 0;
		if(dir==0)this.dirY = 1;
		if(dir==1)this.dirX = 1;
		if(dir==2)this.dirY = -1;
		if(dir==3)this.dirX = -1;
	}

	bodyT(t=0){
		var tick = t%1;
		var result = [{
			x:this.x+(tick*this.dirX),
			y:this.y+(tick*this.dirY)
		}];
		for(var i=0;i<this.body.length-1;i++){
			result.push({
				x:this.body[i].x,
				y:this.body[i].y
			})
		}
		var end2 = result[result.length-2]
		var end = result.pop()
		var difX = end2.x-end.x
		var difY = end2.y-end.y
		result.push({
			x:end.x+(tick*difX),
			y:end.y+(tick*difY)
		});

		return result;
	}

	tickTo(t){
		var tick = Math.floor(t);
		while(tick>this.tick){
			this.x+=this.dirX;
			this.y+=this.dirY;
			this.body.splice(0,0,{
				x:this.x,
				y:this.y
			});
			this.body.pop();

			this.dir = this.dirQ;
			this.dirX = 0
			this.dirY = 0
			if(this.dir==0)this.dirY = 1;
			if(this.dir==1)this.dirX = 1;
			if(this.dir==2)this.dirY = -1;
			if(this.dir==3)this.dirX = -1;

			this.tick++;
		}
	}
}