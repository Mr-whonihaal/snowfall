
function preload(){
  snowImg1=loadImage("snow2.jpg");
  snowImg2=loadImage("snow4.webp")
  }

function setup() {
  createCanvas(800,400);

}



function draw() {
  background(snowImg1);  
  if(frameCount%60===0){
    snow=createSprite(random(0,800), 0, 50, 50);
    snow.addImage(snowImg2)
    snow.velocityY=2
    snow.scale=0.2
  }
  drawSprites();
}