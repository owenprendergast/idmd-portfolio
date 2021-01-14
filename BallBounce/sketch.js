var speedmult = 3
var x1 = 25;
var x2 = 475;
var x3 = 25;
var dir1 = 1.3 * speedmult;
var dir2 = 2 * speedmult;
var dir3 = 3 * speedmult;
var rad = 25;
function setup() {
  createCanvas(900, 700);
  background(255, 255, 255);
  var x1 = 25;
  var x2 = width-25;
  var x3 = 25;
  fill (255,0,0);
}

function draw() {
  
  background(230)
  noStroke();
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);

  if (x1 > width - rad || x1 < rad) {
    dir1 = dir1 * -1; 
    fill(r,g,b);
  }
  ellipse(x1, height/2, 50, 50);
  if (x2 > width - rad || x2 < rad) {
    dir2 = dir2 * -1;
    fill(r,g,b);
  }
  ellipse(x2, (height/width)*x2, 50, 50);
  if (x3 > width - rad || x3 < rad) {
    dir3 = dir3 * -1;
    fill(r,g,b);
  }
  ellipse(x3, height - (height/width)*x3, 50, 50);
  x1 = x1 + dir1;
  x2 = x2 + dir2;
  x3 = x3 + dir3;
  
/*
//This is a weird other version of the code

  background(150 + x1,150 + x2,150 + x3);
  strokeWeight(0.000004* x1 * x2 * x3);
  stroke(60 + (255/width)*x1,60 + (255/width)*x2,60 + (255/width)*x3);
  fill(60 + (255/width)*x1,60 + (255/width)*x2,60 + (255/width)*x3);
  ellipse(x1, height/2, 50, 50);
  
  stroke(90 + (255/width)*x1,90 + (255/width)*x2,90 + (255/width)*x3);
  fill(90 + (255/width)*x1,90 + (255/width)*x2,90 + (255/width)*x3);
  ellipse(x2, x2, 50, 50);
  
  stroke(120 + (255/width)*x1,120 + (255/width)*x2,120 + (255/width)*x3);
  fill(120 + (255/width)*x1,120 + (255/width)*x2,120 + (255/width)*x3);
  ellipse(x3, height - x3, 50, 50);
*/
}