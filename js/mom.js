var momObj=function(){
	this.x;
	this.y;
	this.angle;
	this.numTail;
	this.tailTimer;
	this.numEye;
	this.eyeTimer;
	this.eyeInterval;
	this.numBody;

}
momObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	this.numTail=0;
	this.tailTimer=0;
	this.numEye=0;
	this.eyeTimer=0;
	this.eyeInterval=50;
	this.numBody=0;
}
momObj.prototype.draw=function(){
	this.x=pointDistance(mx,this.x,0.98);
	this.y=pointDistance(my,this.y,0.98);

	var deltaX=mx-this.x;
	var deltaY=my-this.y;
	this.angle=angle(Math.atan2(deltaY,deltaX)+Math.PI,this.angle,0.6);

	this.tailTimer++;
	//Tail尾巴图片循环
	if(this.tailTimer>3)
	{
		this.numTail=(this.numTail+1)%8;
		this.tailTimer%=3;		
	}
	var numTail=this.numTail;

	//eye眼睛图片循环
	this.eyeTimer++;
	if(this.eyeTimer>this.eyeInterval){
		this.numEye=(this.numEye+1)%2;
		this.eyeTimer%=50;
		if(this.numEye==0){
			this.eyeInterval=300;
		}else{
			this.eyeInterval=20;
		}
	}
	var numEye=this.numEye;

	var numBody=this.numBody;

	ctx2.clearRect(0,0,800,600);
	ctx2.save();
	ctx2.translate(this.x,this.y);
	ctx2.rotate(this.angle);
	ctx2.drawImage(momTail[numTail],-momTail[numTail].width*0.5+30,-momTail[numTail].height*0.5);
	ctx2.drawImage(momBody[numBody],-momBody[numBody].width*0.5,-momBody[numBody].height*0.5);
	ctx2.drawImage(momEye[numEye],-momEye[numEye].width*0.5,-momEye[numEye].height*0.5);
	ctx2.restore();	
}