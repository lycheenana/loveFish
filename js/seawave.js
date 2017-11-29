var seawaveObj=function(){
	this.rootx=[];
	this.headx=[];
	this.heady=[];
}
seawaveObj.prototype.num=50;

seawaveObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*20+Math.random()*20;//(0,800]
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-200+50*Math.random();
	}
	ctx1.lineWidth=20;
	ctx1.strokeStyle="#3b1541";
}
seawaveObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		ctx1.beginPath();
		ctx1.moveTo(this.rootx[i],canHeight);
		ctx1.quadraticCurveTo(this.rootx[i],this.heady[i]*0.5,this.headx[i],this.heady[i]);
		ctx1.stroke()
	}
}