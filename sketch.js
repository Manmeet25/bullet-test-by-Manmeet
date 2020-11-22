var bullet,wall;
var thikness,speed,weight;
function setup() {
  thikness = random(22,83)
  speed = random(226,321);
  weight =random(30,52);
  createCanvas(800,400);
  bullet = createSprite(100,200,40,10)
  bullet.velocityX = speed;
  wall = createSprite(700,200,thikness,height/2)

  bullet.shapeColor="white"
  wall.shapeColor="white"
}

function draw() {
  background("pink");
  if (hasCollided(bullet,wall)){
    bullet.velocityX =0
  var damage = 0.5*weight*speed*speed/(thikness*thikness*thikness);

  if(damage>10){
  wall.shapeColor= "red"
  }
  if(damage<10){
    wall.shapeColor= "green"
  }
  }
  drawSprites();
}
