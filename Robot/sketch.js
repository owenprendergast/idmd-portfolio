function setup() {
  createCanvas(720, 480);
  smooth();
  strokeWeight(2);
  CanvasX1 = 0
  CanvasX2 = 0
  cycle = 0
}


function draw() {
  canvasX1 = pmouseX
  canvasX2 = mouseX
  if (canvasX1 > canvasX2) {
    background(205);
    translate(mouseX - 270, mouseY - 90)
    // Neck
    stroke(102); // color of lines
    strokeWeight(4);
    line(246, 257, 246, 162)
    stroke(255, 0, 0);
    line(256, 257, 256, 162)
    stroke(102)
    line(266, 257, 266, 162)
    strokeWeight(2);
    
    // Antennae
    line(241, 155, 276, 107)
    line(246, 155, 216, 56)
    line(252, 155, 186, 170)

    // Head
    fill(0);
    stroke(170);
    strokeWeight(5);
    ellipse(246, 155, 90, 90);
    noStroke();
    fill(255);
    ellipse(238, 150, 28, 28);
    fill(0);
    ellipse(238, 150, 6, 6);
    fill(255, 0, 0);
    ellipse(263, 148, 10, 10);
    fill(0, 140, 255);
    ellipse(226, 130, 8, 8);
    fill(255, 255, 0);
    ellipse(220, 162, 6, 6);

  } else {
    background(205);
    translate(mouseX - 270, mouseY - 90)
    // Neck
    stroke(102); // color of lines
    strokeWeight(4);
    line(266, 257, 266, 162)
    stroke(255, 0, 0);
    line(276, 257, 276, 162)
    stroke(102)
    line(286, 257, 286, 162)
    strokeWeight(2);
    // Antennae
    line(276, 155, 241, 107)
    line(276, 155, 306, 56)
    line(276, 155, 342, 170)



    // Head
    fill(0);
    stroke(170);
    strokeWeight(5);
    ellipse(276, 155, 90, 90);
    noStroke();
    fill(255);
    ellipse(288, 150, 28, 28);
    fill(0);
    ellipse(288, 150, 6, 6);
    fill(255, 0, 0);
    ellipse(263, 148, 10, 10);
    fill(0, 140, 255);
    ellipse(296, 130, 8, 8);
    fill(255, 255, 0);
    ellipse(305, 162, 6, 6);
  }
  // Body
  noStroke();
  fill(102);
  ellipse(264, 377, 66, 66);
  fill(255 - cycle*1.5, 255, 255 - cycle*1.5)
  ellipse(264, 377, 25, 25);
  fill(0);
  stroke(0);
  strokeWeight(4);
  rect(219, 257, 90, 120);
  noStroke();
  fill(102);
  rect(219, 274, 90, 6)
  fill(255 - cycle*1.5, 255, 255 - cycle*1.5)
  rect(219 + cycle, 274, 5, 6)
  cycle = cycle + 1
  if (cycle > 85){
    cycle = 0
  }
}