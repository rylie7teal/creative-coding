function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();

}
//Information about creating a random color was found on p5js' website here: https://editor.p5js.org/aferriss/sketches/rJf3luXdG

function draw() {
  background(220);
  translate(75,100);

  //creating grid using two 'for' loops as well as the push() and pop() functions
for (let x = 0; x < 8; x++){
   for (let y = 0; y < 8; y++){

      let r = random(34,255); //Randomizing fill color
      let g = random(0,255);
      let b = random(150,175);
      let a = random(0,255);

      let sw = random(0,40); //Randomizing stroke weight for a value between 0 and 40

      let r2 = random(0,255); //Randomizing stroke color
      let g2 = random(0,200);
      let b2 = random(0,115);
      let a2 = random(100,255);


      fill(r,g,b,a); //Executing randomness
      stroke(r2,g2,b2,a2);
      strokeWeight(sw);

      push(); //code provided on Canvas
      translate(x * 150, y * 150);
      ellipse(0,0,100,100);
      pop();

   }
}
}