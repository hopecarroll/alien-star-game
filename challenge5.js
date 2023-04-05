// AlienStarGame
createStar = false;
alienHit = false;
function setup() {

  // Set up the canvas.
  createCanvas(400, 400);
  alienX = 25;
  alienY = 300;
  starX = random(width);
  starY = 0;
  starSpeed = 2;
  angleMode(DEGREES);
}

function draw() {
  background("black");
  addStar(starX, starY, 0.5);
  alienSprite(mouseX - alienX, alienY, 1, "greenyellow");
  starY = starY + starSpeed;
  if (starY > height + 50) {
    // if the star goes off the bottom of the canvas
    createStar = false; // set to false so a new star will be created after the star hits the ground

    //turns alien head yellow when star goes through alien
   if (dist(starX, starY, mouseX, 300) <= 600) {
    alienSprite(mouseX - alienX, alienY, 1, "yellow");
    }
 }
}

function mousePressed() {
  push();
  if (!createStar) {
    // if createStar is false
    starY = random(400);
    starX = random(400);
    createStar = true;
    pop();
  }
}
function alienSprite(x, y, size, color) {
  push();
  translate(x, y);
  translate(0, -300);
  scale(size);
  fill(color);
  //alienhead
  noStroke();
  ellipse(50, 350, 50, 50);
  //alienears
  stroke("yellowgreen");
  strokeWeight(10);
  line(40, 325, 30, 315);
  ellipse(30, 315, 5);
  line(60, 325, 70, 315);
  ellipse(70, 315, 5);
  noStroke();
  //alieneyes
  fill("black");
  ellipse(35, 350, 20, 10);
  ellipse(65, 350, 20, 10);
  fill("black");
  //alienmouth
  arc(50, 360, 30, 10, 360, 180);
  //alienbody
  fill("yellowgreen");
  rect(42, 375, 15, 25);
  stroke("yellowgreen");
  strokeWeight(5);
  line(45, 390, 15, 355);
  line(55, 390, 85, 350);
   if (mouseIsPressed) {
    stroke("yellow");
    strokeWeight(10);
    line(40, 325, 30, 315);
    ellipse(30, 315, 5);
    line(60, 325, 70, 315);
    ellipse(70, 315, 5);
  } else {
    stroke("yellowgreen");
    strokeWeight(10);
    line(40, 325, 30, 315);
    ellipse(30, 315, 5);
    line(60, 325, 70, 315);
    ellipse(70, 315, 5);
    noStroke();
    pop();
  }
}
function addStar(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("yellow");
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
