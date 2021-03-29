let index, r;
let xoff = 100;
let yoff = 300;
let inc = 0.015;
let start = 0;
function setup() {
  createCanvas(720, 480);
  pixelDensity(1);
}

function draw() {
  background(0);
  loadPixels();
  yoff = 0;
  for (y = 100; y < height - 100; y++) {
    xoff = start;
    for (x = 100; x < width - 100; x++) { 
      
      index = (y * width + x)* 4;
      r = noise(xoff, yoff) * 255;
      pixels[index] = 0;
      pixels[index + 1] =r/2;
      pixels[index + 2] = r;
      pixels[index + 3] = 150;
      xoff += inc;
    }
    yoff += inc;
  }
  start += inc * 2;
  
  updatePixels();
  //noLoop();
}