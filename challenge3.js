function setup() 

  createCanvas(400, 400);
  starX = random (400);
  starY = random (400);
  starSpeed = 2;
  angleMode(DEGREES);
}

function draw() {
  background("black");
  fill("greenyellow");
  addStar(starX, starY,.5);
  starY = starY + starSpeed;  
  alienSprite(mouseX,300,1);

}
function alienSprite(x,y,size){
  translate (x,y);
  translate (0,-300);
  scale(size);
  //alienhead
  noStroke();
  ellipse(50,350,50,50); 
  //alienears
  stroke("yellowgreen");
  strokeWeight(10);
  line(40,325,30,315);
  ellipse(30,315,5)
  line(60,325,70,315);
  ellipse(70,315,5);
  noStroke();
  //alieneyes
  fill("black");
  ellipse(35,350,20,10);
  ellipse(65,350,20,10);
  fill("black");
  //alienmouth
  arc(50, 360, 30, 10, 360, 180);
  //alienbody
  fill('yellowgreen');
  rect(42,375,15,25);
  stroke("yellowgreen");
  strokeWeight(5);
  line(45,390,15,355);
  line(55,390,85,350);
  // challenge 2 task
  if (mouseIsPressed) {
    stroke ("yellow");
    strokeWeight(10);
  line(40,325,30,315);
  ellipse(30,315,5)
  line(60,325,70,315);
  ellipse(70,315,5);
  }
  else{
    stroke("yellowgreen");
  strokeWeight(10);
  line(40,325,30,315);
  ellipse(30,315,5)
  line(60,325,70,315);
  ellipse(70,315,5);
  noStroke();
  }
}
function addStar(x,y,size){
  push();
  translate (x,y);
  scale(size);
   rotate(180);
  //first point
  triangle(0, 50, 20, 0, -20, 0);
  //second point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  //third point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  //fourth point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  //fifth point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  pop();
}
