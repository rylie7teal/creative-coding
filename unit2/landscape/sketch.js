function preload(){
  noLoop();
  
 // Artists Statement: I was heavily inspired by "Soft Landscapes," both in colors and in general feeling.
 // When we did the in-class brainstorming exercise, I was reminded of my time spent in the Shenandoah mountains. 
 //My family would vacation there yearly, and I loved watching the dew burn off the leaves in the morning. 
 //I tried to capture that with this piece- combining colors that I love with the soft delicacy of a morning in the mountains; 
 //watching the sunrise while seeing the trees slowly start to reveal themselves as Mother Nature takes off her mask of sleep. 
}

function setup() {

  // create the canvas
  createCanvas(800, 800);

}

function draw() {
    translate(0,200);
  let backr=random(75,85); //creating a random background color that will fall somewhere within the "natural" realm
  let backg=random(75,80);
  let backb=random(100,200);
  let backa=random(240,255);

  background(backr,backg,backb,backa); //assigning background color to one of the random values decided above

  let circler = random(255);
  let circleg = random(150,200);
  let circleb = random(81,191);
  let circlea = random(200,255);
  fill(circler, circleg, circleb, circlea);
  noStroke();
  
  ellipse(150,-100,150,150);
  ellipse(150,-100,175,175);
  ellipse(150,-100,200,200);

 for (let x = 0; x <= width; x+=5){ // adding "stars" to the sky for more visual interest

    let offset = randomGaussian(0,-150);
    let y = offset;   
    circle(x,y,3);
  }
    
beginShape(); //drawing first set of mountains
    for (let x = 0; x <= width; x+=1){ //first line of mountains
    let y = noise(x * 0.005) * height/7;
  let mountr1 = random(150,255); //generating a random color for the first set
  let mountg1 = random(150,200);
  let mountb1 = random(81,191);
  let mounta1 = random(175,255);
  fill(mountr1, mountg1, mountb1, mounta1);
    vertex(x,y);  
  }
   vertex(width + 100, height);
   vertex(0, height);
endShape();

for (let trees = 0; trees <=50; trees+=1){ //creating trees
  let xval = random (-15,800);
  let yval = random(0,750);
push(); //creating trees
translate(xval, yval);
 noStroke();
   fill(49, 46, 40, 150);
rect(0,100,5,10);
   fill(74, 103, 65);
 triangle(-10, 100, 0, 80, 10, 100);
   fill(46, 75, 54);
triangle(-10, 90, 0, 70, 10, 90);
pop();
    }

for (let trees = 0; trees <=50; trees+=1){ //creating trees
  let xval = random (-15,800);
  let yval = random(0,750);
push(); //creating trees
translate(xval, yval);
 noStroke();
   fill(49, 46, 40, 150);
rect(0,100,5,10);
   fill(74, 103, 65);
 triangle(-10, 100, 0, 80, 10, 100);
   fill(46, 75, 54);
triangle(-10, 90, 0, 70, 10, 90);
pop();
    }

beginShape(); //drawing second set of mountains
    for (let x = 0; x <= width; x+=1){ //first line of mountains
    let y = noise(x * 0.007) * height/5;
  let mountr2 = random(150,255); //generating random color for the second set
  let mountg2 = random(150,200);
  let mountb2 = random(81,191);
  let mounta2 = random(175,255);
  fill(mountr2, mountg2, mountb2, mounta2);
    vertex(x,y); 
  }
   vertex(width + 100, height);
   vertex(0, height);
endShape();

for (let trees = 0; trees <=50; trees+=1){ //creating trees
  let xval = random (-15,800);
  let yval = random(0,750);
push(); //creating trees
translate(xval, yval);
 noStroke();
   fill(49, 46, 40, 150);
rect(0,100,5,10);
   fill(74, 103, 65);
 triangle(-10, 100, 0, 80, 10, 100);
   fill(46, 75, 54);
triangle(-10, 90, 0, 70, 10, 90);
pop();
    }

beginShape(); //third second set of mountains
    for (let x = 0; x <= width; x+=1){ //third line of mountains
    let y = noise(x * 0.006) * height/2;
  let mountr3 = random(150,255); //generaing random color for third set
  let mountg3 = random(150,200);
  let mountb3 = random(81,191);
  let mounta3 = random(175,255);
  fill(mountr3, mountg3, mountb3, mounta3);
    vertex(x,y);
  }
   vertex(width + 100, height);
   vertex(0, height);
endShape();

for (let trees = 0; trees <=50; trees+=1){ //creating trees
  let xval = random (-15,800);
  let yval = random(0,750);
push(); //creating trees
translate(xval, yval);
 noStroke();
   fill(49, 46, 40, 150);
rect(0,100,5,10);
   fill(74, 103, 65);
 triangle(-10, 100, 0, 80, 10, 100);
   fill(46, 75, 54);
triangle(-10, 90, 0, 70, 10, 90);
pop();
    }

beginShape(); //drawing fourth set of mountains
    for (let x = 0; x <= width; x+=1){ //fourth line of mountains
    let y = noise(x * 0.002) * height/.75;
  let mountr4 = random(150,255); //generating random code for fourth set
  let mountg4 = random(150,200);
  let mountb4 = random(81,191);
  let mounta4 = random(175,255);
  fill(mountr4, mountg4, mountb4, mounta4);
    vertex(x,y); 
  }
   vertex(width + 100, height);
   vertex(0, height);
endShape();

for (let trees = 0; trees <=50; trees+=1){ //creating trees
  let xval = random (-15,800);
  let yval = random(0,750);
push(); //creating trees
translate(xval, yval);
 noStroke();
   fill(49, 46, 40, 150);
rect(0,100,5,10);
   fill(74, 103, 65);
 triangle(-10, 100, 0, 80, 10, 100);
   fill(46, 75, 54);
triangle(-10, 90, 0, 70, 10, 90);
pop();
    }

} //closing draw function loop