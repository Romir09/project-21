var bullet,wall;
var speed,weight,rating;
var damage, thickness;
var state 
//var thickness = random(22,83)
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet = createSprite(50,200,50,20);
  speed = Math.round(random(223,321));
    weight = Math.round(random(30,52));
    bullet.velocityX = speed;
}

function draw() {
  background("black");  

  

    //if(keyDown("space")) {
      //state="running";
    //}
  

  //if(keyDown("space")) {
    //speed = Math.round(random(223,321));
    //weight = Math.round(random(30,52));
   // bullet.velocityX = speed;

  if(hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    damage = Math.round(0.5*weight*speed*speed/thickness*thickness*thickness);
     
    if(damage>=10) {
    wall.shapeColor=color(255,0,0);
    
    }

    if(damage<10) {
      wall.shapeColor=color(0,255,0);
      
    }

    //state="end";
  }
//}

  //if(state==="end") {

    if(damage>=10) {
      fill(255,0,0);
    }

    if(damage<10) {
      fill(0,255,0);
    }

    textSize(20);
   
    text("Damage: "+damage,600,50);

    

    text("Press 'R' to reset",1050,50);
    if(keyDown("r")) {
      reset();
    }
 // }

  drawSprites();
}


function reset() {
  
  bullet.x=50;
  bullet.shapeColor=color(127,127,127);

}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
