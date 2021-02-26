let dia = window.innerWidth + 2000;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    noStroke();
}

function draw() {
  while (dia > 0) {
    fill(random(255), 0, random(100, 255));
    ellipse(width / 2, height / 2, dia, dia);
    dia -= 20;
  }
}