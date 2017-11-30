var aneObj=function(){
	this.x=[];
	this.y=[];
	this.Num=[];
	this.ang=0;
}
aneObj.prototype.num=30;
aneObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=Math.random()*canWidth;//(0,800]
		this.y[i]=Math.random()*canHeight;//(0,600]
		this.Num[i]=Math.floor(Math.random()*7);//[0,6]
	}
}
aneObj.prototype.draw=function(){
	//海葵保持和海藻一样的浮动频率
	this.ang+=17*0.001;
	
	for(var i=0;i<this.num;i++){
		ctx1.drawImage(anePic[this.Num[i]],this.x[i]+40*Math.sin(this.ang),this.y[i]);
	}
}