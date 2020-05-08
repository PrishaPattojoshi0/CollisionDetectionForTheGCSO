var car,wall;
var speed,weight;

function setup() {
  createCanvas(1500,400);
  speed=random(55,95);
  weight=random(400,1500);

  car = createSprite(30, 150, 30, 30);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(1450,200,60,height/2);
  wall.shapeColor = "grey";

}

function draw() {
  background(0,0,0);

  if (wall.x - car.x < (car.width + wall.width)/2){
     car.velocityX= 0;
     var deformation = 0.5*weight*speed*speed/22500;
  }

  if(deformation>180){
    car.shapeColor=(255,0,0);
  }

  if (deformation<180 && deformation>100){
    car.shapeColor=(230,230,0);
  }

  if (deformation <100){
    car.shapeColor(0,255,0);
  }
  drawSprites();
}

/*
2. Create a Car Object with a Weight and Speed Property.

5. Assign a random value to the Weight and Speed Property of the car.

● Range of Weight is 400 to 1500
● Range of Speed is 30 to 95.

6. Collide this car with a stationary wall. The car will come to a halt as it hits the wall.

7. Calculate the deformation for the car when it collides with the wall.

8. When collision happens, based on deformation calculations determine the color of the
car as red, yellow or green
  */