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
var momBodyOra=[];
var momBodyBlue=[];
var momEye=[];

var baby;
var babyTail=[];
var babyBody=[];
var babyEye=[];

//定义鼠标移动坐标
var mx;
var my;

var data;
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

	baby=new babyObj();
	baby.init();

	data=new dataObj();

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
		momBodyOra[i]=new Image();
		momBodyBlue[i]=new Image();
		momBodyOra[i].src="./img/momSwim"+i+".png";
		momBodyBlue[i].src="./img/momSwimBlue"+i+".png";
	}

	//小鱼baby图片初始化
	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="./img/babyTail"+i+".png";
	}
	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./img/babyFade"+i+".png";
	}
	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="./img/babyEye"+i+".png";
	}
}
function gameLoop(){
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;

	drawBackground();
	window.requestAnimationFrame(gameLoop);	

	seawave.draw();

	ane.draw();

	fruit.monitor();
	fruit.draw();

	momFruitCollision();
	mom.draw();

	momBabyCollision();
	baby.draw();

	//更新得分
	data.draw();
}

function onMouseMove(e){
	if(!data.gameOver){
		if(e.offsetX||e.layerX)
		{
			mx=e.offsetX==undefined?e.layerX:e.offsetX;
			my=e.offsetY==undefined?e.layerY:e.offsetY;
		}
	}	
}