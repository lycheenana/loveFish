var seawaveObj=function(){
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.ang=0;
}
seawaveObj.prototype.num=50;

seawaveObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*25+Math.random()*20;//(0,800]
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-240+50*Math.random();
	}
	
}
seawaveObj.prototype.draw=function(){
	//海藻呈现正弦函数摆动，定义自变量ang
	this.ang+=17*0.001;
	
	ctx1.lineWidth=20;
	ctx1.strokeStyle="#3b1541";
	ctx1.globalAlpha=0.6;
	ctx1.lineCap="round";
	
	for(var i=0;i<this.num;i++){
		ctx1.beginPath();
		ctx1.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+40*Math.sin(this.ang);
		ctx1.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		ctx1.stroke()
	}
}