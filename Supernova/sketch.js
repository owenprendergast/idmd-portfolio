var x = 250;
var y = 250;
var w = 50;
var ww = 0;
var wow = 0;
var clr = 0;
function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  ellipse(x, y, w, w);
  distance = dist(x, y, mouseX, mouseY);
  if (distance < w / 2) {
    w += 1;
  } else {
    w = 50;
  }
  if (w > width) {
    fill(190, 190, 255)
    ellipse(x, y, w, w);
    fill(220, 220, 255)
    ellipse(x, y, ww, ww);
    ww += 3.5;
    fill(255)
    ellipse(x, y, wow, wow);
    wow += 2;
    swarm(30);
  } else {
    redShape = map(w, 0, width, 0, 255)
    fill(redShape, 0, 0);
    ellipse(x, y, w, w);
    ww = 0;
    wow = 0;
  }
  
}


function swarm(quant) {
  for (let i = 0; i < quant; i++) {
    clr = random(0,2);
    if (clr < 0.75) {
      fill(255,0,0)
    } else if (clr > 1.25) {
      fill(255, 255, 0);
    } else {
      fill(255,170,0);
    }
    rect(random(0,width), random(0, height), 20, 20);
  }
}