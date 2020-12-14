class Food{
	constructor(x,y,hue){
		this.x = x;
		this.y = y;
		this.color = hue;
	}

	hue(t){
		return (this.color+(36*t))%360;
	}
}