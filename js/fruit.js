var Num=[];
var fruitObj=function(){
	this.x=[];
	this.y=[];
	this.size=[];
	this.fruitType=[];
	this.alive=[];//定义一个数组alive来保存果实的状态，true/false
	this.blue=new Image();
	this.orange=new Image();
	
	this.spd=[];
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=seawave.headx[i]-10;
		this.y[i]=seawave.heady[i]-10;
		this.alive[i]=false;
		this.spd[i]=Math.random()*0.03+0.015;
		this.size[i]=0;
	}
	this.blue.src="./img/blue.png";
	this.orange.src="./img/fruit.png";
}
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		//绘制出生的果实
		if(this.alive[i]==true){
			if(this.fruitType[i]=="blue"){
				var pic=this.blue;
			}else{
				var pic=this.orange;
			}
			if(this.size[i]<15){
				this.x[i]=seawave.headx[Num[i]];
				this.y[i]=seawave.heady[Num[i]];
				this.size[i]+=0.2;
			}else{
				this.y[i]-=this.spd[i]*deltaTime;
			}	
			
			ctx1.drawImage(pic,this.x[i],this.y[i],this.size[i],this.size[i]);
			if(this.y[i]<50) this.alive[i]=false;
		}
		
	}
}
fruitObj.prototype.monitor=function(){
	//定义一个变量来保存true的果实数量
	var num=0;
	for(var i=0;i<this.num;i++){
		if(this.alive[i]==true) num++;
	}
	//当果实数量小于15，遍历果实池，找出false的果实进行出生准备
	if(num<15){
		for(var i=0;i<this.num;i++){
		if(!this.alive[i]) born(i);
		}
	}		
}
function born(i){
	//定义一个随机变量保存每次出生果实的位置
	Num[i]=Math.floor(Math.random()*30);//(0,30]
	fruit.alive[i]=true;
	fruit.size[i]=0;
	if(Math.random()<0.3){
			fruit.fruitType[i]="blue"
		}else{
			fruit.fruitType[i]="orange";
		}
}
