var fixedRect, movingRect;
var gameObject1, gameObject2;
var box1, box2,box3;
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,50,50);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  box1= createSprite(400,400,50,50);
  box1.shapeColor = "green";

  box2= createSprite(100,400,50,50);
  box2.shapeColor = "green";

  box3= createSprite(400,100,50,50);
  box3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,box1)){
    movingRect.shapeColor = "blue";
    box1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    box1.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}


