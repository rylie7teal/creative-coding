let grammar = tracery.createGrammar({
  bookTitle : "#body.capitalize#, #body.capitalize#, and #adj.capitalize# #body.capitalize#.",
  chapterTitle : ["#ripper.capitalize# #adj.capitalize# #body.capitalize#"],
  sentence : "Their #adj# #body# #verb#.",
  ripper : ["prisoner of",
            "my love, the",
            "the wolf and the",
            "fires of",
            "the magic of",
            "savage",
            "surrender to",
            "forbidden",
            "dangerous",
            "more than a",
            "untamed",
            "promise of the"],
  adj: ["huge", 
        "roaring", 
        "wicked", 
        "busty", 
        "throbbing", 
        "heaving",
        "stunning",
        "dreamy",
        "beautiful",
        "moist",
        "solid",
        "slippery",
        "sticky",
        "greedy",
        "bitter",
        "dexterous",
        "shiny",
        "wild",
        "tender",
        "industrious",
        "sweaty",
        "turgid"],
  body: ["orbs", 
           "tongues", 
           "lips", 
           "eyes", 
           "legs", 
           "toes",
           "fingers",
           "ear lobes",
           "feet",
           "glabella",
           "weenus",
           "ulvula",
           "mouths",
           "coccyx",
           "hair"],
  verb: ["whisper", 
         "crave", 
         "caress", 
         "quiver", 
         "jackhammer", 
         "lumber",
         "bloom",
         "kiss",
         "want",
         "desire",
         "heave",
         "tear",
         "gaze",
         "plunder",
         "unite",
         "shudder",
         "rear"],
  origin: "#chapterTitle#",
  paragraph : "#addSentences#", 
  addSentences : ["#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#", "#sentence#"],
  sentenceLoop : "#addSentences#",
});

// add some modifiers to help Tracery
grammar.addModifiers(tracery.baseEngModifiers);

function setup() {
  noCanvas();
  
  // create the HTML #content container
  let content = createElement("div");
  content.attribute("id","content");
  
  // add the book title
  content.child(createElement("h1",grammar.flatten("#bookTitle#")))
  // chapter loop
  let c = 1;
  do {
    
    // pick a chapter title
    content.child(createElement("h2",  "Chapter " + c + ": " + grammar.flatten("#chapterTitle#")));
    
    // paragraph loop
    let p = 0;
    do {
      content.child(createElement("p",grammar.flatten("#paragraph#")));
      p++;
    }while (p < random(40,130));
    c++;
  }while (c < 55);
 
  // trigger the polyfill rendering
  window.PagedPolyfill.preview();
 
}
