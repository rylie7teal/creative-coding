//Artist Statement: when we were discussing how we can see time outside of things that are manmade, I really connected with many
//of the nature themes that were brought up at my table. As such, I wanted to combine our last project, the landscape, with this
//new clock function. I think that the cyclical nature of clouds, while not necessarily a reliable method of counting time,
//is always so interesting to observe. As such, I mapped some clouds that travel across the page as the seconds pass. I also added 
//a sun to make the illustration more rooted in reality, and that moves each hour. 
function setup() {
  createCanvas(800, 400);
}

function draw() {
   background("#7b9ec1"); //assigning background color 
  clock();
   translate (0, 100);
  noStroke();
  beginShape(); //drawing first part of horizon
    for (let x = 0; x <= width; x+=1){ //first line of horizon
    let y = noise(x * 0.002) * height/1.25; //generating hillside
  fill("#1f502f");
    vertex(x,y);  
  }
   vertex(width + 100, height);
   vertex(0, height);
endShape();
  
  beginShape(); //drawing second part of horizon
    for (let x = 0; x <= width; x+=1){ //second line of horizon
    let y = noise(x * 0.003) * height; //generating hillside
  fill("#699678");
    vertex(x,y); 
  }
   vertex(width + 100, height);
   vertex(0, height);
endShape();
}

function clock(){ //establishing clock
  let hr = hour(); //creating hour variable
  let mn = minute(); //creating minute variable
  let sec = second(); //creating second variable
  let milisec = millis(); //creating millisecond variable
  let secmap = map (sec, 0, 800, 0, 800); //mapping x value across the canvas as a second 
  let hourmap = map (hr, 400, 0, 400, 0); //mapping x value as an hour 
  let circmove = 0 + 13.3 * secmap; //starting position of cloud circles + number of times that the cloud can travel across the 800px canvas in 60 seconds * secmap
  //this was implimented because the cloud would get stuck and reset after about 25 seconds, so I figured that there was some confusion about where the canvas ended and how many times the unit would move across it

   fill ("#ffd133");
  circle (400, hourmap, 100); //creating a sun that moves on the hour 
  
  fill("#f3f6f4");
  circle(circmove, 50, 50); //drawing first cloud out of several circles and moving them across the screen 
  circle(circmove+25,65,50);
  circle(circmove+50, 50, 60);
  
    
  fill("#f8f5ec");
  circle(circmove+75, 130, 65); //drawing second cloud out of several circles and moving them across the screen 
  circle(circmove+100,115,70);
  circle(circmove+125, 125, 60);  
}