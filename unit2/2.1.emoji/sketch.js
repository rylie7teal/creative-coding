function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}
// I am making the "Confounded Face" emoji, which canbe found here: https://emojipedia.org/confounded-face

function draw() {
  background(220);
  stroke("#fed74d"); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill("#fed74d"); // set the fill color

  // draw an ellipse with 300 pixel diameter
  // with its center at x position 200
  // and at y position 200
  ellipse(200,200,300,300);

//eyes
  //left
    //left upper
  stroke("#8e4d34");
  strokeWeight(10);
  line(160, 160, 120, 125);

    //left lower
  stroke("#8e4d34");
  strokeWeight(10);
  line(120, 180, 160, 160);

  //right
    //right upper
  stroke("#8e4d34");
  strokeWeight(10);
  line(240, 160, 280, 125);

    //right lower
  stroke("#8e4d34");
  strokeWeight(10);
  line(280, 180, 240, 160);

//mouth downstroke
  stroke("#8e4d34");
  strokeWeight(10);
  line(120, 300, 100, 275); //line(x1, y1, x2, y2)

  stroke("#8e4d34");
  strokeWeight(10);
  line(180, 300, 160, 275);

  stroke("#8e4d34");
  strokeWeight(10);
  line(240, 300, 220, 275);

  //mouth upstroke
  stroke("#8e4d34");
  strokeWeight(10);
  line(120, 300, 160, 275);

  stroke("#8e4d34");
  strokeWeight(10);
  line(180, 300, 220, 275);

  stroke("#8e4d34");
  strokeWeight(10);
  line(240, 300, 280, 275);

  rectMode(CENTER);
  strokeMode(CENTER); 

 
}