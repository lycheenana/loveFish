//判断大鱼和食物的碰撞
function momFruitCollision(){
	for(var i=0;i<fruit.num;i++){
		var distance=theDistance(fruit.x[i],fruit.y[i],mom.x,mom.y);
]
		if(distance<10&&fruit.fruitType[i]=="orange"){
			fruit.numBody++;
		}
	}
}