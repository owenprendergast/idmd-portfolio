function setup() {
  createCanvas(600, 600);
}

function draw() {
  if (mouseIsPressed) {
    background(255)
  } else {
    fill(0.6*mouseX, 0.6*mouseY, 180)
    
  }
  ellipse(mouseX,mouseY,80,80);
}