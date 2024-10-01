function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();

}
//Information about creating a random color was found on p5js' website here: https://editor.p5js.org/aferriss/sketches/rJf3luXdG

function draw() {
  background(255);
  translate(75,80);


  //creating grid using two 'for' loops as well as the push() and pop() functions
for (let x = 0; x < 8; x++){
      let r = random(35,60); //Randomizing fill color
      let g = random(75,100);
      let b = random(15,75);
      let a = random(0,255);

      let sw = random(5,20); //Randomizing stroke weight for a value between 0 and 40

    
   for (let y = 0; y < 8; y++){
      let r2 = random(0,10); //Randomizing stroke color
      let g2 = random(5,15);
      let b2 = random(55,67);
      let a2 = random(100,255);

      fill(r,g,b,a); //Executing randomness
      stroke(r2,g2,b2,a2);
      strokeWeight(sw);

      push(); //code provided on Canvas
      translate(x * 150, y * 150);
      ellipse(0,0,100,100);
      pop();

      push(); //added a rectangle with the same values as the ellipse, but slightly off center from where the ellipse originated
      translate(x * 200, y * 150);
      rect(0,0,100,100);
      pop();
   }
}
}