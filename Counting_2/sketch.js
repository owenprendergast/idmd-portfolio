let cols = 20; 
let rows = 15; 
let count = 0;
let dir = 1;
function setup() {
  createCanvas(800, 500);
  background('pink');
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  let xoff = width / (cols + 1);
  let yoff = height / (rows + 1);
  for (let c = 0; c < cols; c++) { 
    let x = xoff * (c + 1);
    if (dir == 1) {
      for (let r = 0; r < rows; r++) { 
        let y = yoff * (r + 1);
        count++;
        stroke(randomColor());
        text('' + count, x, y);
      }
    } else {
      for (let r = rows; r > 0; r--) {
        let y = yoff * (r); 
        count++;
        stroke(randomColor());
        text('' + count, x, y);
      }
    }
    dir *= -1;
  }
}
function randomColor() {
  return color(random(255), random(255), random(255), );
}