var can1,can2;
var ctx1,ctx2;
var canHeight;
var canWidth;

var bgImg=new Image;

var seawave;

window.onload=main;

function main(){
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

	
}
function gameLoop(){
	window.requestAnimationFrame(gameLoop);
	drawBackground();

	seawave.draw();
}