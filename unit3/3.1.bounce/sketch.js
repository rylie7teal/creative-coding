let x = 0; //defining the variables given on Canvas 
let y = 0;
let xspeed = 3;
let yspeed = 1.7;

function setup() {
  createCanvas(400, 400);
}

function draw() {
 background(7,116,130,150); //changing background color
  circle (x,y,50); //drawing a circle
   let r = random(0,255); //Randomizing fill color
   let g = random(0,255);
   let b = random(0,255);
   let a = random(0,255);
  
   let r2 = random(0,10); //Randomizing stroke color
   let g2 = random(5,15);
   let b2 = random(55,67);
   let a2 = random(100,255);

   let sw = random (1,15); //randomizing stroke weight

  if (x < 0 | x > 375){ //checking for collision on left and right edges
    xspeed = xspeed*-1; //reversing the x direction 
     fill(r,g,b,a); //changing color
     strokeWeight(sw); //changing stroke weight
     stroke(r2,g2,b2,a2); //changing stroke fill
  }
  
  if (y < 0 | y > height){ //checking for collision on top and bottom edges
    yspeed = yspeed*-1; //reversing the y direction 
   fill(r,g,b,a); //changing color
   strokeWeight(sw); //changing stroke weight
   stroke(r2,g2,b2,a2); //changing stroke fill
  }
   x = x + xspeed; // iterate x
   y = y + yspeed; // iterate y
  
}

function mousePressed() { //changing color when mouse is pressed
  let r = random(0,255); //Randomizing fill color
  let g = random(0,255);
  let b = random(0,255);
  let a = random(0,255);
  fill(r,g,b,a);
  
  let r2 = random(0,10); //Randomizing stroke color
  let g2 = random(5,15);
  let b2 = random(55,67);
  let a2 = random(100,255);
  stroke(r2,g2,b2,a2);
  
  let sw = random (1,15); //randomizing stroke weight
  strokeWeight(sw); 
  
  //rect(mouseX, mouseY,50); trying to make other shapes appear when mouseclicked
  
}