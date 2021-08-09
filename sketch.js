var fixedRect,movingRect;
var backgroundimg;
var boyimg;
var sea;
var boy;

function preload() {
  backgroundimg = loadImage("image/background.jpg");
  boyimg = loadImage("image/boy.png");
}

function setup() {
  createCanvas(1200,800);

 sea = createSprite(200,200,1200,200);
 sea.addImage ("bg",backgroundimg);
 sea.scale = 0.8;   

 boy = createSprite(100,400,10,10);
 boy.addImage ("boy1",boyimg);
 boy.scale = 0.2;
 
 
}

function draw() {
  background(0); 
  
  if(keyDown("up")){
    boy.y=boy.y-5;
  }

  if(keyDown("down")){
    boy.y=boy.y+5;
  }
  
  drawSprites();
}