var player , obstacleGrp;
var frameount =0;
var life = 5;
var cooldown=false;
function setup(){
    createCanvas(800 , 800);
    obstacleGrp = new Group();
    player = createSprite(400 , 780 , 40 , 40);
    player.shapeColor = "red";
}

function draw(){
    background("skyBlue");
    //ballPosition.on('value' , readPosition , showError); 

    
        if(keyCode===37&& player.x>=24){
            player.x-=4;
    
        }
        if(keyCode===39&& player.x<=776){
            player.x+=4;
        }
    
    if(frameCount%15===0){
        
        obstacles();
    }
    frameCount++;
    if(frameCount%100===0){
        frameCount===0
    }
    if(player.isTouching(obstacleGrp) && cooldown===false){
        life--;
        cooldown = true;
    }
    if(player.isTouching(obstacleGrp)===false){
        cooldown = false;
    }
    if(life<=0){
        frameCount=1;
        text("You Lose" , 390 , 390);
    }
    drawSprites();
    fill(255);
    text("Lives : " + life , 10 , 10);
}
function obstacles(){
    var obstacle = createSprite(Math.round(random(1,19))*40,-10,40,40);
    obstacle.shapeColor = "black";
    obstacle.velocityY = 6;
    obstacle.lifetime = 200;
    obstacleGrp.add(obstacle);
}

