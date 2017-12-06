//两个点无限接近
function pointDistance(aim,cur,ratio){
	var delta=cur-aim;
	return aim+delta*ratio;
}
//两个角度无限接近
function angle(aim,cur,ratio){
	var delta=cur-aim;
	if(delta>Math.PI) delta-=2*Math.PI;
	if(delta<-Math.PI) delta+=2*Math.PI;//[-PI,PI]
	return aim+delta*ratio;
}
//求两点的距离
function theDistance(x1,y1,x2,y2){
	return Math.pow(x1-x2,2)+Math.pow(y1-y2,2);
}
