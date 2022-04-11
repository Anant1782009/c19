var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 8;

  ghost = createSprite(300,450,50,50)
  ghost.addImage(ghostImg)
  ghost.scale = 0.30

  
  
}

function draw() {
  background("black");
  
  if(tower.y > 400){
      tower.y = 300
    }

    if(keyDown("space")){
      ghost.velocityY = -5
    }

    
    ghost.velocityY = ghost.velocityY + 0.8

    
    
    drawSprites();

    spawnClimber()
     
    
}

function spawnClimber(){
    if(frameCount % 50 == 0){

      var door = createSprite(Math.round(random(600,0)) , 200 , 50 ,50)
      door.addImage(doorImg)
      door.scale = 0.60
      door.velocityY = 5

      var obstacle = createSprite(600 , 150 , 50 , 50)
      obstacle.addImage(climberImg)
      obstacle.scale = 0.60
      obstacle.velocityY = 5
    


      obstacle.x = door.x
      obstacle.y = door.y   
    }
}
