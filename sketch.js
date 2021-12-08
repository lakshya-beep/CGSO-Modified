var car, wall;
var speed,weight;
//ar carimage;



function preload(){
  //carimage=loadImage("images/rocket.png");
}

function setup(){
createCanvas(1400,600);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";

 // car.addImage(carimage);
 // car.scale=0.3;
//car.debug = true;
//car.setCollider("rectangle",0,0,10,40);  


  wall = createSprite(1200, 200, 50, 300);
  wall.shapeColor = "white";
  //wall.debug=true;
  
  speed = random(55,180);
  weight = random(400,1500);
  
  
  

}

function draw(){

  background(164,94, 174);

  
  
if(keyDown("space")){
  car.velocityX = speed;


  if (wall.x-car.x < (car.width+wall.width)/2 ) {
    car.velocityX=0;
     

    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation > 180) {
      car.shapeColour = "red";
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColour = "yellow";
    }
    if (deformation < 100) {
      car.shapeColour = "green";
  
    }
  }
}
drawSprites();
textSize(20);
fill(0);
text(car.velocityX,200,20);


}