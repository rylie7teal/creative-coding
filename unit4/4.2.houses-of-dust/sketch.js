let poem = ''; //initializing poem as an empty string
//establish how many variables i need to make sure my code can generate the same number of houses as Knowles
//17 materials
//26 places
//4 light sources
//22 inhabitants

//my houses aren't meant to be poetic or mean anything deep- i just hope to make you laugh and generate something unexpected!

let grammar = tracery.createGrammar(
{
  "material": [ //created list of 17 materials 
  "STAINED TUPPERWARE",
  "PLASTIC BAGS",
  "POTATOES",
  "CONSTRUCTION PAPER",
  "VELUM",
  "ACRYLIC",
  "TAPE",
  "BREAD",
  "CINDERBLOCK",
  "FABRIC",
  "ALUMINUM FOIL",
  "STEEL",
  "PARTICLE BOARD",
  "COTTON",
  "GINGERBREAD",
  "FROSTING",
  "USED TISSUES"
  ],

  "place": [//establishing a list of 26 places
  "IN A DINER",
  "BY THE SEA",
  "NEAR YOUR HOUSE",
  "IN YOUR HOUSE",
  "ON A MOUNTAIN",
  "IN THE MIDWEST",
  "WHEREVER YOU THINK OHIO IS",
  "IN THE ROAD",
  "STUCK IN I-95 TRAFFIC",
  "IN A MAZE",
  "DEEP IN A CORN MAZE",
  "IN A LECTURE",
  "BY A CHURCH",
  "IN THE ARCTIC CIRCLE",
  "AT THE FALL LINE",
  "NEAR A MUSEUM",
  "IN A PAINTING",
  "IN 3/4 SCALE",
  "IN A THOUGHT EXPERIMENT",
  "CLOSE TO THE EDGE",
  "STUCK IN A PILE OF ONIONS",
  "BY YOUR FORMER SELF",
  "IN A CHILDREN'S PLAYHOUSE",
  "SOMEWHERE",
  "IN AN APPLE",
  "NEAR ONE SPECIFIC TREE"
  ],

  "light_source":[ //establishing 4 light sources
  "USING TEA LIGHTS",
  "USING MATCHES",
  "USING A FIREPLACE",
  "USING THE LIGHT FROM THE STARS ABOVE"  
  ],

  "inhabitants":[ //establishing a list of 22 inhabitants
  "REDDITORS",
  "DOGS, BUT ONLY LITTLE ONES",
  "THE ROUNDEST BIRDS",
  "PEOPLE WHO COMMENT ON TIK-TOKS",
  "BUGS",
  "WORMS",
  "PEOPLE WHO THINK AI IMAGES ARE REAL",
  "JACK BLACK",
  "CELEBRITIES BEFORE THEY WERE FAMOUS",
  "THE ZODIAC KILLER",
  "HORSES THAT CAN READ",
  "GINGERBREAD PEOPLE",
  "THE FOUNDING FATHERS",
  "GHOSTS",
  "SKINCARE INFLUENCERS",
  "CATS...?",
  "CONSPIRACY THEORISTS",
  "ALL OF YOUR GREAT-GREAT-GRANDPARENTS",
  "GIANTS",
  "MERMAIDS",
  "POLITICIANS",
  "THE CAST OF 'GREY'S ANATOMY'"
  ],
  "origin": "A HOUSE OF #material# \n \t #place# \n \t \t #light_source# \n \t \t \t INHABITED BY #inhabitants# \n" 
  //generating poem
});




function setup() {
  createCanvas(800, 800);
  //noLoop();
}

function draw() {
  background(220);
  frameRate(0.5); //using frameRate() to animate the poem 
  textFont('Courier New'); //changing font to make it more typewriter-esque 

//   let sec = seconds(5); //was trying to make a nested for() loop that changed the poem after a certain number of 
//seconds passed 

// for (let sec = 0; sec < 5; sec += 1){
for (let y = 70; y < height; y += 150){
  textSize(20); //changing text size for readability 
  poem = grammar.flatten("#origin#"); //running flatten to generate poem 
  text(poem, 50, y); 
}
}
//}

// for (let y = 70; y < height; y += 150){
//   textSize(20); //changing text size for readability \
//   text(poem, 50, y);  I KNOW THIS WORKS BUT DOESN'T PRINT OUT NEW POEMS