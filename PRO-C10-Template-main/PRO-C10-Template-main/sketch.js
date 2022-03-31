var sea,ship;
var seaImg,shipImg1;

function preload(){
  

  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,450);
  background("blue");

  // Moving background
  sea=createSprite(300,400);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.5;

  
  ship = createSprite(140,150,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(3);
  sea.velocityX = -3;

 
  if(sea.x < 0){
    sea.x = 0;
    sea.x = sea.width;
    sea.x = sea.width/9;
    sea.y = height;
    sea.y = height/3;
  }

 
  drawSprites();
}