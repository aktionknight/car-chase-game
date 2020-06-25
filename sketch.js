var car , carImg;
var NPC,NPCImg
var NPCgroup;
var road,roadImg
var marks_left,marks_right,marks_rightImg,marks_leftImg;
var gameState = 0
var bg,bgImg
var start

function preload()
{

carImg = loadImage("images/policeActual.png");
NPCImg = loadImage("images/NPC.png")
roadImg = loadImage("images/road.jpg")
bgImg = loadImage("images/forest.jpg")
marks_rightImg = loadImage("images/marks.png")
marks_leftImg = loadImage("images/marks2.png")


}

function setup()
{

createCanvas(displayWidth,displayHeight)





bg = createSprite(500,400,1000,1000)
bg.addImage("bg",bgImg)
bg.scale = 10


road = createSprite(800,400,500,1000)
road.addImage("road",roadImg)




car = createSprite(750,900,30,50);
car.addImage("car",carImg);
start = createSprite(800,400,1000,10)

NPCgroup = new Group();



//start.lifetime = 100
start.visible = false;




}

function draw()
{
  background("bgImg")

  if(frameCount % 50 === 0)
 {
  
  var NPC = createSprite(random(500,900),0,30,50)
  NPC.addImage ("NPC",NPCImg)
  NPC.scale = 0.2
  NPC.velocityY = 10;
  NPC.lifetime = 100;
  
  
  NPC.depth = car.depth;
  car.depth = car.depth + 1;

NPCgroup.add(NPC);

 }

  

if(gameState === 0){
  

    car.velocityY = -28




if (road.y > 500){


  road.y = 0;
}


if(car.isTouching(start)){

car.velocityY = 0;
road.velocityY = 30

}

if(frameCount % 10 === 0){

wind1 = createSprite(car.x + random(50,120)  ,car.y+ random(14,50) ,5,random(16,70))
wind1.shapecolor = "white";
wind1.lifetime = 10

wind2 = createSprite(car.x - random(50,100),car.y+random(24,50),random(3,8),random(10,15))
wind2.shapecolor = "white";
wind2.lifetime = 10


wind3 = createSprite(car.x + random(50,100)  ,car.y+ random(40,80) ,7,random(16,80))
wind3.shapecolor = "white";
wind3.lifetime = 10

wind4 = createSprite(car.x - random(50,100),car.y+random(34,90),random(3,8),random(50,115))
wind4.shapecolor = "white";
wind4.lifetime = 10


}


if(keyIsDown(LEFT_ARROW)){
  car.x += -10;

 
  marks_right = createSprite(car.x + 20,car.y + 120,20,20)
marks_right.addImage("marks_right",marks_rightImg)
marks_right.scale = 0.35
marks_right.lifetime = 1

marks_right.depth = car.depth;
car.depth = car.depth + 1;

}


if(keyIsDown(RIGHT_ARROW)){
  car.x += 10;

 marks_left = createSprite(car.x - 20,car.y + 120,20,20)
  marks_left.addImage("marks_left",marks_leftImg)
  marks_left.scale = 0.35
  marks_left.lifetime = 1
  
  marks_left.depth = car.depth;
  car.depth = car.depth + 1;

}

if(NPCgroup.isTouching(car)){

  gameState = 1
  
  }

}
 


if(gameState === 1){

wind1.visible = false
wind2.visible = false
wind3.visible = false
wind4.visible = false

//road.velocityY = 0;
NPCgroup.destroyEach();
road.visible = false
bg.visible = false
car.visible = false

textSize(30)
text("WELL SEEMS LIKE YOUR SKILLS JUST AIN'T ENOUGH",500,300)


}









drawSprites();
}



