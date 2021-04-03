let res = 20;
let rows, cols;
let xoff, yoff, zoff = 1;
let inc = 0.015;
let value, title, slider;

function setup() {
  createCanvas(400, 400);
  rows = height/res;
  cols = width/res;
  slider = createSlider(1, 10, 5, 0.1);
  title = createP('The intensity is: ' + value);
  strokeWeight(0);
  
}

function draw() {
  background(220);
  value = slider.value();
  title.html('The intensity is: ' + value);
  yoff = 100;
  for(let i=0; i<rows; i++) {
    xoff = 300;
    for(let j=0; j<cols; j++) {
      n = noise(xoff, yoff, zoff*0.1) * 255;
      fill(n);
      rect(i * res, j * res, res, res)
      drawDial(i * res + 10, j * res + 10, n);
      xoff += inc * value;
    }
    yoff += inc * value;
  }
  zoff += inc * value;
}

function drawDial(x, y, n) {
  push();
  translate(x,y);
  let a = map(n, 0, 255, 0, TWO_PI);
  let angle = atan(a);
  strokeWeight(1);
  stroke(255,0,0);
  rotate(angle*10);
  line(0,0,0,-10)
  
  pop();
}