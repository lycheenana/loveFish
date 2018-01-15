var can1,can2;
var ctx1,ctx2;
var canHeight;
var canWidth;

var lastTime;
var deltaTime;

//背景图片
var bgImg=new Image;

//摆动的海藻
var seawave;

//随着海草摆动的海葵
var ane;
var anePic=[];

//不断生出的果实
var fruit;

//大鱼
var mom;
var momTail=[];
var momBodyOra=[];
var momBodyBlue=[];
var momEye=[];

//小鱼
var baby;
var babyTail=[];
var babyBody=[];
var babyEye=[];

//鼠标指针的坐标
var mx;
var my;

var data;

window.onload=function(){
	lastTime=Date.now();
	deltaTime=0;

	init();
	gameLoop();
}

function init(){
	//获取canvas context
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext("2d");

	//获取动画界面的尺寸
	canWidth=can1.width;
	canHeight=can1.height;

	//绑定鼠标事件mousemove
	can2.addEventListener('mousemove',onMouseMove,false);

	//鼠标指针位置初始化
	mx=canWidth*0.5;
	my=canHeight*0.5;

	//背景图片路径
	bgImg.src="./img/background.jpg";

	//海藻对象初始化
	seawave=new seawaveObj();
	seawave.init();

	//海葵对象初始化
	ane=new aneObj();
	ane.init();
	for(var i=0;i<7;i++){
		anePic[i]=new Image();
		anePic[i].src="./img/ane"+i+".png";
	}

	//果实对象初始化
	fruit=new fruitObj();
	fruit.init();

	//大鱼对象初始化
	mom=new momObj();
	mom.init();
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

	//小鱼对象初始化
	baby=new babyObj();
	baby.init();
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

	data=new dataObj();	
}

function gameLoop(){
	//获取单次循环所用的时间
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;

	//请求浏览器在下次重绘之前调用此函数
	window.requestAnimationFrame(gameLoop);

	//背景图片绘制
	(function(){
		ctx1.drawImage(bgImg,0,0)
	})();

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
		//获取鼠标指针在can2上的坐标
		if(e.offsetX||e.layerX)
		{
			mx=(e.offsetX==undefined)?e.layerX:e.offsetX;
			my=(e.offsetY==undefined)?e.layerY:e.offsetY;
		}
	}	
}