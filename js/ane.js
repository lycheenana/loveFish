//浮动的海葵对象
var aneObj=function(){
	this.x=[];
	this.y=[];
	this.index=[];//记录海葵图片的索引
	this.range=[];
	this.alpha=0;
}
aneObj.prototype.num=30;//海葵的总数量
aneObj.prototype.init=function(){
	//初始化海葵的位置和图片索引
	for(var i=0;i<this.num;i++){
		this.x[i]=Math.random()*canWidth;//(0,800]
		this.y[i]=Math.random()*canHeight;//(0,600]
		this.index[i]=Math.floor(Math.random()*7);//[0,6]
		this.range[i]=20+15*Math.random();
	}
}
aneObj.prototype.draw=function(){
	//海葵保持和海藻一样的浮动频率
	this.alpha+=deltaTime*0.001;
	var l=Math.sin(this.alpha);
	
	for(var i=0;i<this.num;i++){
		ctx1.drawImage(anePic[this.index[i]],this.x[i]+this.range[i]*l,this.y[i]);
	}
}