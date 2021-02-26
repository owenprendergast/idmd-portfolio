let colors = [];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  //noLoop();
  colors.push(random(255), random(255), random(255));
  console.log(colors);
  console.log(colors.length);
}

function draw() {
  //background(230);
  for (let y = height / 10; y < height - 1; y = y + height / 10) {
    for (let x = width / 10; x < width - 1; x = x + width / 10) {
      stroke(random(255), random(255), random(255));
      //strokeWeight(15);
      //point(x, y);
      strokeWeight(0.003);
      line(x, y, mouseX, mouseY);
    }
  }
}