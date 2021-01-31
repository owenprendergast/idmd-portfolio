var r = 255;
var g = 255;
var b = 255;
function setup() {
  createCanvas(1300, 800);
  background(0);
  frameRate(60)
}

function mousePressed(){
  r = random(255);
  g = random(255);
  b = random(255);
  fill(r,g,b)
}

function draw() {
  ellipse(mouseX, mouseY, 45, 45);
}