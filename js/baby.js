var babyObj=function(){};
babyObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	this.eyeTimer=0;
	this.numEye=0;
	this.eyeInterval=200;
	this.tailTimer=0;
	this.numTail=0;
	this.bodyTimer=0;
	this.numBody=0;
};
babyObj.prototype.draw=function(){
	//设置小鱼baby的坐标，无限靠近大鱼mom
	this.x=pointDistance(mom.x,this.x,0.96);
	this.y=pointDistance(mom.y,this.y,0.96);

	//设置坐标系旋转的角度，x轴正方向指向mom
	var deltaX=this.x-mom.x;
	var deltaY=this.y-mom.y;
	var ang=Math.atan2(deltaY,deltaX);
	this.angle=angle(ang,this.angle,0.6);

	//设置小鱼尾巴摆动图片
	this.tailTimer++;
	if(this.tailTimer>3){
		this.numTail=(this.numTail+1)%8;
		this.tailTimer%=3;
	}

	//设置小鱼眨眼睛图片替换
	this.eyeTimer++;
	if(this.eyeTimer>this.eyeInterval){
		this.numEye=(this.numEye+1)%2;
		this.eyeTimer%=this.eyeInterval;
		if(this.numEye==1){
			this.eyeInterval=20;		
		}else{
			this.eyeInterval=200;
		}

	}

	//设置小鱼身体褪色图片循环
	this.bodyTimer++;
	if(this.bodyTimer>15){
		this.numBody++;
		if(this.numBody>19){
			this.numBody=19
			//游戏结束game over
			data.gameOver=true;
		}
		this.bodyTimer%=15;
	}

	var numTail=this.numTail;
	var numEye=this.numEye;
	var numBody=this.numBody;

	ctx2.save();
	ctx2.translate(this.x,this.y);
	ctx2.rotate(this.angle);
	ctx2.drawImage(babyTail[numTail],-babyTail[numTail].width*0.5+25,-babyTail[numTail].height*0.5);
	ctx2.drawImage(babyBody[numBody],-babyBody[numBody].width*0.5,-babyBody[numBody].height*0.5);
	ctx2.drawImage(babyEye[numEye],-babyEye[numEye].width*0.5,-babyEye[numEye].height*0.5);
	ctx2.restore();

}
