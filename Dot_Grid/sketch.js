let colors = [];
let clrPick = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  arrayFill();
  console.log(colors.length);
}

function draw() {
  background(230);
  for (let y = height / 10; y < height - 1; y = y + height / 10) {
    for (let x = width / 10; x < width - 1; x = x + width / 10) {
      if (clrPick > 242) {
        clrPick = 0;
      }
      stroke(colors[clrPick],
        colors[(clrPick + 1)],
        colors[(clrPick + 2)]);
      strokeWeight(0.5);
      line(x, y, mouseX, mouseY);
      clrPick += 3;

    }
  }
  for (let y = height / 10; y < height - 1; y = y + height / 10) {
    for (let x = width / 10; x < width - 1; x = x + width / 10) {
      if (clrPick > 242) {
        clrPick = 0;
      }
      stroke(colors[clrPick],
        colors[(clrPick + 1)],
        colors[(clrPick + 2)]);
      strokeWeight(15);
      point(x, y);
      clrPick += 3;

    }
  }
}

function arrayFill() {
  for (let i = 0; i < 81; i++) {
    colors.push(random(255), random(255), random(255));
  }
}