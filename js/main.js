var can1,can2;
var ctx1,ctx2;
var canHeight;
var canWidth;

var lastTime;
var deltaTime;

var bgImg=new Image;

var seawave;

var ane;
var anePic=[];

var fruit;
var mom;
var momTail=[];
var momBody=[];
var momEye=[];

//定义鼠标移动坐标
var mx;
var my;

window.onload=main;

function main(){
	lastTime=Date.now();
	deltaTime=0;

	init();
	gameLoop();
}
function init(){
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext("2d");

	//绑定鼠标移动事件
	can2.addEventListener('mousemove',onMouseMove,false);

	canWidth=can1.width;
	canHeight=can1.height;

	//鼠标位置初始化
	mx=canWidth*0.5;
	my=canHeight*0.5;

	bgImg.src="./img/background.jpg";

	seawave=new seawaveObj();
	seawave.init();

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();	

	//海葵图片初始化
	for(var i=0;i<7;i++){
		anePic[i]=new Image();
		anePic[i].src="./img/ane"+i+".png";
	}
	//大鱼图片初始化
	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="./img/momTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src="./img/momEye"+i+".png";
	}
	for(var i=0;i<8;i++){
		momBody[i]=new Image();
		momBody[i].src="./img/momSwim"+i+".png";
	}
}
function gameLoop(){
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	
	window.requestAnimationFrame(gameLoop);
	drawBackground();

	seawave.draw();

	ane.draw();

	fruit.monitor();
	fruit.draw();

	momFruitCollision();
	mom.draw();
}

function onMouseMove(e){
	if(e.offsetX||e.layerX)
	{
		mx=e.offsetX==undefined?e.layerX:e.offsetX;
		my=e.offsetY==undefined?e.layerY:e.offsetY;
	}
}