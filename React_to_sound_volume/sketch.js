var mic;
var vol = 0;
var xMax = 0;

function setup() {
  createCanvas(900, 600);

  // create and start audio input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(200);

  // get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();

  // add a call to the ease function here to smooth the volume variable
  // it should be of the form vol = vol + ease(......)
  
  // map vol from range 0 to 1 to range 0, 600
  var xVol = map(vol, 0, 1, 0, width);

  // let x either be the value of xVol or stay as x, whichever is currently greater
  xMax = max(xMax, xVol); 

  // map volume to x coordinate
  var xVol = map(vol, 0, 1, 0, width);
  // let xMax either be the value of xVol or stay as x, whichever is currently greater
  xMax = max(xMax, xVol); 

  // Draw ellipses for both instantaneous volume and Max volume
  noStroke();
  
  fill(220, 210, 200);
  rect(0, 200, xMax, 200);
  fill(255, 0, 0);
  rect(xMax, 200, 20, 200);
  fill(0, 255, 0);
  rect(0, 200, xVol, 200);
}

function ease(target, current, ease) {
  return (target-current)/ease;
}
