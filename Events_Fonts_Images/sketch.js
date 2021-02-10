function preload() {
  Img = loadImage("Seattle.jpg");
}

var x = 100;
var y = 75;
var r = 100;
function setup() {
  createCanvas(1000, 500);
  background(120);
  textSize(3/10 * r);
  textAlign(CENTER,CENTER);
  textFont("Pangolin");
}
function draw() {
  image(Img,0, 0);
  fill(255, 255, 255);
  noStroke();
  ellipse(x, y, r, r);
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x = min(width - r/2, x + 10);
    } else if (keyCode == LEFT_ARROW) {
      x = max(r/2, x - 10);
    } else if (keyCode == UP_ARROW) {
      y = max(r/2, y - 10);
    } else if (keyCode == DOWN_ARROW) {
      y = min(height - r/2, y + 10);
    }
  }
  fill(0, 0, 0);
  if (x <= r/2) {
    text("Ouch", x, y);
  } else if (x >= width - r/2) {
    text("Ouch", x, y);
  } else if (y <= r/2) {
    text("Ouch", x, y);
  } else if (y >= height - r/2){
    text("Ouch", x, y);
  }
}