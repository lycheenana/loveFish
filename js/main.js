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

	canWidth=can1.width;
	canHeight=can1.height;

	bgImg.src="./img/background.jpg";

	seawave=new seawaveObj();
	seawave.init();

	ane=new aneObj();
	ane.init();
	for(var i=0;i<7;i++){
		anePic[i]=new Image();
		anePic[i].src="./img/ane"+i+".png";
	}

	fruit=new fruitObj();
	fruit.init();

	
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
}