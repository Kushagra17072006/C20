var fixedrect, movingrect, r1, r2;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 80);
  movingrect = createSprite(400, 200, 80, 50);
 r1 = createSprite(50, 100, 50, 80);
  r2 = createSprite(650, 100, 80, 50);

  r1.velocityX = 10;
  r2.velocityX = -10;

  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";

  fixedrect.debug = true;
  movingrect.debug = true;

  console.log();

}

function draw() {
  background(0);  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  if(r2.x - r1.x < r1.width/2 + r2.width/2
    && r1.x - r2.x < r1.width/2 + r2.width/2){
      r1.velocityX=r1.velocityX*(-1);
      r2.velocityX=r2.velocityX*(-1);
    }
    if(r2.y - r1.y< r1.height/2 + r2.height/2
      && r1.y - r2.y < r1.height/2 + r2.height/2){
        r1.velocityY=r1.velocityY*(-1);
        r2.velocityY=r2.velocityY*(-1);
      }

  drawSprites();
}