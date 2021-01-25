/*  Originally created by Alysse Galo
    Modified by Susan Evans
    Modified by Chandru Narayan
    Last edited 02/06/2020
    
    Draws a bald man, that "sings" to music
*/

// holds the audio input object
var mic;
// holds the current volume
var vol;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
  
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();
}

function draw() {
  background(255);
  // Get the overall volume (between 0 and 1.0)
  vol = mic.getLevel();
  
  if (vol > 0.03) {
    background(random(230,255), random(230,255), random(230,255));
  }
  //call all of the drawing functions
  allHair();
  ears();
  head();
  eyes(); 
  nose();
  mouth();
  bowtie(); 
  eyebrows();
}
//allows you to quickly call multiple instances of the hair function
function allHair() {
  hair(250, 170);
}
// Raise hair reacting to sound!
function hair(x, y) {
  var adjustedVol = map(vol, 0, 1, 0, 700);
  fill(0);
  ellipse(x, y, 120 + 0.3 * adjustedVol, 80 + adjustedVol);
}
//allows you to call multiple ears quickly
function ears() {
  ear(140, 245);
  ear(362, 245);
}

//drawing the ears
function ear(x, y) {
  noStroke();
  fill(243, 205, 159);
  ellipse(x, y, 50, 90);
  fill(234, 184, 125);
  ellipse(x, y, 30, 70);
}

//drawing the head
function head() {
  noStroke();
  strokeWeight(2);
  fill(243, 205, 159);
  ellipse(250, 250, 220, 250);
}
//calling multiple eye drawing functions
function eyes() {
  eye(196, 224);
  eye(300, 224);
}
//drawing the eyes
function eye(x, y) {
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255);
  if (vol > 0.3){
    fill(random(255), random(255), random(255));
  }
  //check for mouse press
  if (mouseIsPressed) {
    var eyeVol = map(vol, 0, 1, 0, 60)
    ellipse(x, y, 70, 50);
    noStroke();
    fill(0);
    ellipse(x, y, 50, 50);
    fill(255);
    ellipse(x + 9  - eyeVol, y, 10, 10);
  } else {
    var eyeVol = map(vol, 0, 1, 0, 30)
    ellipse(x, y, 50, 30);
    noStroke();
    fill(0);
    ellipse(x, y, 30, 30);
    fill(255);
    ellipse(x + 9  - eyeVol, y, 10, 10);
  }
}
//drawing the nose and calling 2 nostrils
function nose() {
  stroke(0);
  strokeWeight(2);
  line(248, 224, 248, 281);
  
  nostril(264, 281);
  nostril(232, 281);
}
//drawing nostrils
function nostril(x, y) {
  stroke(0);
  strokeWeight(1);
  fill(242, 205, 153);
  ellipse(x, y, 20, 10);
}

// singing mouth with volume maps
function mouth() {
  noStroke();
  var mouthVol = map(vol, 0, 1, 0, 300);
  
  fill(242, 159, 159);
 
  ellipse(249, 325, 40 + mouthVol, 10 + mouthVol);
  fill(0);
   if (vol > 0.1){
    fill(random(255), random(255), random(255));
  }
  ellipse(249, 325, 30 + mouthVol, 5 + mouthVol);
}

//bowtie drawing
function bowtie() {
  fill(234, 28, 46);
  if (vol > 0.2){
    fill(random(255), random(255), random(255));
  }
  rect(230, 380, 40, 30, 10);
  triangle(190, 366, 250, 396, 190, 420);
  triangle(308, 368, 250, 396, 308, 420);
}

//calling eyebrows
function eyebrows() {
  eyebrow(279, 180);
  eyebrow(180, 180);
}

//drawing an eyebrow
function eyebrow(x, y) {
  stroke(0);
  strokeWeight(2);
  //check for mouse press
  if (mouseIsPressed) {
    strokeWeight(15);
  }
  fill(255, 255, 255);
  line(x, y  - 100*vol, x + 37, y - 100*vol);
}