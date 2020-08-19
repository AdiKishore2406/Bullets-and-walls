var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
   
  speed = random(63,181);
  weight = random(30, 52);
  thickness = random(22,83)
  

  bullet = createSprite(30,200,20,10);
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80)
  bullet.velocityX = speed;
  

}

function draw() {
  background(0,0,0);  
  
  
  

  if (isTouching(bullet,wall)){
    
      bullet.velocityX = 0;
      damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
      if(damage>=10){
        wall.shapeColor = color(255,0,0);
      }
      else {
        wall.shapeColor = color(0,255,0);
      }
  }
  drawSprites();
}

function isTouching(o1, o2){
  if (o2.x - o1.x<o1.width/2+o2.width/2&&
  o1.x-o2.x<o1.width/2+o2.width/2&&
  o1.y-o2.y<o1.height/2+o2.height/2&&
  o2.y-o1.y< o1.height+o2.height/2)
{ 
  return true
}
 else{
   return false
  }
  
  }