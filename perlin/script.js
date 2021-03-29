
let start = 0;
let myX, myY;
let incr = 0.01
let xoff = 500;
function setup() {
  createCanvas(400, 400);
  myX = 0;
  frameRate(60);
}

function draw() {
  background(255);
  xoff = start;
  beginShape();
  for(i = 0; i < width; i++) {
    myX = i;
    myY = noise(xoff) * height;
    xoff += incr;
    //point(myX, myY);
    vertex(myX, myY)
    
  }
  start += incr;
  endShape();
  //noLoop();
}