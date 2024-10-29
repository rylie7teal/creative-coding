let debug = false;
let speedfactor = 4;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;
let d = 0;

function setup() {
  createCanvas(400, 400);

  x = random(width);
  y = random(height);
}

function draw() {
  background(220);

  noStroke();
  
  d = sqrt((x-mouseX)**2 + (y-mouseY)**2);

  x += xspeed;
  y += yspeed;
  
  circle(x, y, 50);

  if (mouseX > x){
    xspeed = speedfactor;
  }
  else {
    xspeed = -speedfactor;
  }

  if (mouseY > y){
    yspeed = speedfactor;
  }
  else {
    yspeed = -speedfactor
  }

  if (d < 25){
    fill(random(0, 255), random(0, 255), random(0,255));
    x = random(width);
    y = random(height);
  }

  if (debug){
    textSize (30);
    text("mouseX:" + mouseX, 50, 50);
    text ("mouseY" +mouseY, 50, 50);
    text("x:" + x, 50, 120);
    text ("y: " + y, 50, 150);
    text ("d: " + d, 50, 180)
  }
}
