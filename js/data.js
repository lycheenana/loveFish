var dataObj=function(){
	this.gameOver=false;
	this.score=0;
	this.double=1;//定义吃掉的为橘色果实
}
dataObj.prototype.draw=function(){
	ctx2.save();
	ctx2.fillStyle="#fff";
	ctx2.font="30px Arial";
	//得分绘制
	ctx2.fillText("the Score : "+this.score,canWidth*0.5-80,canHeight-10);
	if(this.gameOver){
		//游戏结束（GAME OVER）绘制
		ctx2.fillText("GAME OVER",canWidth*0.5-80,canHeight*0.5);
	}
	ctx2.restore();
}
dataObj.prototype.addScore=function(){
	//得分统计
	this.score+=100*this.double;
}
