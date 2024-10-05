function setup() {
  // create the canvas
  createCanvas(1000, 1000); //The original canvas is a square (20"x20"), so I made this a square as well. 

  //I am emulating this piece: https://spalterdigital.com/artworks/untitled-41/

  // disable animation
  noLoop();
}

function draw() {

 background("#faefdd");
 
 let pr = 244; //changed from hex to rgba to set opacity of squares
 let pg = 157;
 let pb = 148;
 let pa = 100;

 // hex code is #f49d94 for pink and #140fob for black

 let br = 113;
 let bg = 119;
 let bb = 110;
 let ba = 200;

for (let x = 0; x < 25; x++){ //there are 25 black squares
    let xval = random(50, 800); //picking a randm location within the plane
    let yval = random(50, 800);

     noFill();//assigning fill, stroke, and color values
     stroke (br, bg, bb, ba);
     strokeWeight(7); 

      push(); //pushing and popping!
      translate(xval, yval);
      rect(0,0,125,125);
      pop();

   for (let y = 0; y < 3; y++){ //creating the pink squares
     let xval = random(50, 800);
     let yval = random(50, 800);

     noFill(); //assigning fill, stroke, and color values
     stroke (pr, pg, pb, pa);
     strokeWeight(7); 

      push(); 
      translate(xval, yval);
      rect(0,0,125,125);
      pop();
   }

}













}

