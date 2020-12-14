const dirX = [0,1,0,-1];
const dirY = [1,0,-1,0];
const dirXY = [[,3,,],[2,,0],[,1,,]];
class Snake{
	constructor(username,hue,body){
		this.username = username;
		this.hue = hue;
		this.body = body;
		this.x = body[0].x;
		this.y = body[0].y;

		var dir = dirXY[body[0].x-body[1].x+1][body[0].y-body[1].y+1]
		this.dirPrev2 = dir;
		this.dirPrev = dir;
		this.dir = dir;
		this.dirNext = dir;

		this.tick = 0;
	}

	bodyT(t=0){
		this.tickTo(t);
		var tick = t%1;
		var result = [{
			x:this.x+(tick*dirX[this.dir]),
			y:this.y+(tick*dirY[this.dir])
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
			this.x+=dirX[this.dir];
			this.y+=dirY[this.dir];
			this.body.splice(0,0,{
				x:this.x,
				y:this.y
			});
			if(!this.eatFood())this.body.pop();

			this.dirPrev2 = this.dir;
			this.dir = this.dirNext;
			this.dirPrev = this.dir;
			this.tick++;
		}
	}

	eatFood(){
		for(var i=0;i<foods.length;i++){
			if(foods[i].x==this.x && foods[i].y==this.y){
				foods.splice(i,1)
				return true;
			}
		}
		return false;
	}
}