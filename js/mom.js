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
	//设置大鱼的坐标，无限靠近鼠标移动位置mousemove
	this.x=pointDistance(mx,this.x,0.98);
	this.y=pointDistance(my,this.y,0.98);

	//设置坐标旋转角度，使得x轴正方向指向鼠标位置
	var deltaX=mx-this.x;
	var deltaY=my-this.y;
	this.angle=angle(Math.atan2(deltaY,deltaX)+Math.PI,this.angle,0.6);

	//尾巴tail图片循环，使得numTail的值为0——7的循环
	this.tailTimer++;
	if(this.tailTimer>3)
	{
		this.numTail=(this.numTail+1)%8;
		this.tailTimer%=3;		
	}

	//眼睛eye图片循环
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

	var numTail=this.numTail;
	var numEye=this.numEye;
	var numBody=this.numBody;

	ctx2.clearRect(0,0,800,600);

	ctx2.save();
	ctx2.translate(this.x,this.y);
	ctx2.rotate(this.angle);
	ctx2.drawImage(momTail[numTail],-momTail[numTail].width*0.5+30,-momTail[numTail].height*0.5);
	//根据吃到果实（momFruitCollision函数）的颜色来绘制大鱼的身体
	if(data.double==2){
		ctx2.drawImage(momBodyBlue[numBody],-momBodyBlue[numBody].width*0.5,-momBodyBlue[numBody].height*0.5);
	}else{
		ctx2.drawImage(momBodyOra[numBody],-momBodyOra[numBody].width*0.5,-momBodyOra[numBody].height*0.5);
	}	
	ctx2.drawImage(momEye[numEye],-momEye[numEye].width*0.5,-momEye[numEye].height*0.5);
	ctx2.restore();	
}