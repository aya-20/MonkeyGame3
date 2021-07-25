
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

var ground;

var gameState;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(displayWidth-20, displayHeight-20);

  monkey = createSprite(displayWidth/2-30, displayHeight/2-30, 30, 30);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = .1;
  
  ground = createSprite(displayWidth/2, displayHeight-30, 100000, 10);
  
  obstacleGroup = new Group();
  foodGroup = new Group();
  
  score = 0;

  gameState = 1; 
  
}


function draw() {
  background("white");
  
  if (gameState === 1) {
  text("Score: " + score, 300, 300);
   

  monkey.collide(ground);

  camera.position.x = displayWidth/2+200;
  camera.position.y = displayHeight/2+200;
  
 /* if (keyDown("space") && monkey.isTouching(ground)){
monkey.velocityY = -5;
  }
  monkey.velocityY = monkey.velocityY + .5;
  monkey.collide(ground); */
  
   //if (keyDown("space")  && monkey.isTouching(ground)){
     // monkey.velocityY = -10;
     // }
    monkey.velocityY = monkey.velocityY + .5;
   if (keyDown("space")){
      monkey.velocityY = -10;
      
      }
  
 ground.velocityX = 5;
  if (ground.x < -1000){ 
    ground.x = 100;
  }
  
  Obstacle();
  //Fruit();
  score = score + Math.round(getFrameRate()/60);

}
  
// if (monkey.isTouching(foodGroup)){
//   score = score + 1;
//   foodGroup.destroyEach();
  
// }
  if (monkey.isTouching(obstacleGroup)){
    score = score -500;
    obstacleGroup.destroyEach();
    gameState = 0;
  }

  if (gameState === 0) {
    monkey.destroy();
    text("Game Over", displayWidth/2, displayHeight/2);
  }
  
  drawSprites();

  
}

function Obstacle(){
  if (frameCount%60 === 0){
    obstacle = createSprite(displayWidth/2+360, displayHeight/2+360, 30, 30);
    obstacle.velocityX = -7;
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = .1;
    obstacleGroup.add(obstacle);
    
  }
  
}

// function Fruit(){
//   if (frameCount%80 === 0){
//     banana = createSprite(displayWidth/2+360, displayHeight/2360, 20, 20);
//     banana.velocityX = -8
//     banana.y = Math.round(random(510, 580));
    
//     banana.addImage(bananaImage);
//     banana.scale = .1;
//     foodGroup.add(banana);
//   }
// }





