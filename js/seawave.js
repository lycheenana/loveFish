//浮动的水藻对象
var seawaveObj=function(){
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.range=[];
	this.alpha=0;
}
seawaveObj.prototype.num=50;

seawaveObj.prototype.init=function(){
	//初始化海藻的位置
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*20+Math.random()*30;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-240+50*Math.random();//[360,410)
		this.range[i]=30+20*Math.random();
	}
}
seawaveObj.prototype.draw=function(){
	//海藻左右摆动特效的参数准备
	this.alpha+=deltaTime*0.001;
	var l=Math.sin(this.alpha);
	
	//海藻绘制
	ctx1.lineWidth=20;
	ctx1.strokeStyle="#3b1541";
	ctx1.globalAlpha=0.6;
	ctx1.lineCap="round";
	
	for(var i=0;i<this.num;i++){
		ctx1.beginPath();
		ctx1.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+this.range[i]*l;
		ctx1.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		ctx1.stroke()
	}
}