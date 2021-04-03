let x, y, title, value, value_text, intensity_slider;
let xoff = 300;
let clr = [0,0,0];

function setup() {
  createCanvas(400, 400);
  intensity_slider = createSlider(1, 20, 10, 0.1);
  value_text = createP('The intensity is: ' + value);
  title = createP('perlin noise movement');
  title.position(20,10);
  color_button = createButton("color shifter");
  color_button.position(0,0);
  color_button.mousePressed(colorShift);
}

function colorShift () {
  clr = [random(255), random(255), random(255)];
}

function draw() {
  background(220);
  value = intensity_slider.value();
  value_text.html('The intensity is: ' + value);
  fill(clr);
  x = noise(xoff)*width;
  y = noise(xoff + 200)*height;
  ellipse(x, y, 25, 25);
  xoff += 0.005 * value;
}