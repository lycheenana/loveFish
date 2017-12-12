//判断大鱼和食物的碰撞
function momFruitCollision(){
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			var distance=theDistance(fruit.x[i],fruit.y[i],mom.x,mom.y);
			
			if(distance<900&&!data.gameOver){
				data.fruitNum++;//大鱼吃掉果实的数量累加
				mom.numBody++;
				if(mom.numBody>7){
					mom.numBody=7;
				}
				fruit.alive[i]=false;
				if(fruit.fruitType[i]=='blue'){
					data.double=2;//定义吃掉的为蓝色果实
				}else{
					data.double=1;
				}
			}
		}
	}
		
	}

//判断大鱼和小鱼的碰撞
function momBabyCollision(){
	var distance=theDistance(mom.x,mom.y,baby.x,baby.y);
	if(distance<900&&mom.numBody!==0&&!data.gameOver){
		//大鱼投食给小鱼后恢复生命值（身体颜色初始化）
		baby.numBody=0;
		mom.numBody=0;
		data.addScore();
	}
}