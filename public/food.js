class Food{
	constructor(x,y,hue){
		this.x = x;
		this.y = y;
		this.color = hue;
	}

	get hue(){
		this.color+=1;
		this.color%=360;
		return this.color;
	}
}