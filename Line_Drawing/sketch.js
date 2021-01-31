var r = 255;
var g = 255;
var b = 255;

function setup() {
  createCanvas(1200, 700);
  background(220);
}

function draw() {
  if(mouseIsPressed) {
    stroke(255, 255, 255);
    line(width/2, height/2, mouseX, mouseY);
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r,g,b);
    ellipse(mouseX,mouseY, 25,25)
  }
  
  
}