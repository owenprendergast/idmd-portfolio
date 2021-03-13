let startX = 20; // Initial x coordinate
let stopX = 160; // Final x coordinate
let startY = 30; // Initial y coordinate
let stopY = 500; // Final y coordinate
let x = startX; // Current x coordinate
let y = startY; // Current y coordinate
let step = 0.005; // createCanvas of each step (0.0 to 1.0)
let pct = 0.0; // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(600, 600);
  background(240);
  strokeWeight(5);
  ellipse(startX, startY, 20, 20);
}

function draw() {

  if (pct < 1.0) {
    x = startX + ((stopX - startX) * pct);
    y = startY + ((stopY - startY) * pct);
    pct += step;
  }
  ellipse(x, y, 1, 1);
  if (pct >= 1.0) {
    ellipse(stopX, stopY, 20, 20);
  }
}

function mousePressed() {
  if (pct >= 1.0) {
    ellipse(mouseX, mouseY, 20, 20);
    startX = stopX;
    startY = stopY;
    stopX = mouseX;
    stopY = mouseY;
    pct = 0;
  }
}

//***** 
// MODIFY THIS CODE TO ADD ADDITIONAL POINTS TO TWEEN TO    
// BASED ON WHERE THE MOUSE IS CLICKED. START EACH ADDITIONAL
// TWEEN ONLY WHEN THE PREVIOUS TWEEN HAS COMPLETED. 
// HINT: USE mousePressed(), mouseX, mouseY  
//*****