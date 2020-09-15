var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 80);
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);

  speed = random(223,321);
  weight = random(32,50);
  thickness = random(22,83);

  
}

function draw() {
  background("black");

  if (hasCollied(bullet,wall))
  {
     bullet.velocityX = 0;
     var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    
     if (damage>10) 
     {
        wall.shapeColor = (255,0,0);

     }

     if (damage<10) 
     {
        wall.shapeColor = (0,255,0);
        
     }
  }

  
  }
 function display() {
   
   bullet.display();
   wall.display();

 }
       
function hasCollied(bullet,wall) 
{
   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;

   if (bulletRightEdge >= wallLeftEdge) 
   {
      return true;
   
   }
   return false;
}

