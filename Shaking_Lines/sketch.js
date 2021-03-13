  function setup() {
      createCanvas(600, 400);
  }

  function draw() {
      background(210);
      y2 = random(20, height-20);
      line(20, height/2, width-20, y2);
    for(i = 0; i < 10; i++) {
      line(((width/10)*i + width/20) + random(-30,30) * mouseX/width,
           0 + random(-30,30) * mouseX/width,
           ((width/10)*i + width/20) + random(-30,30) * mouseX/width,
           height + random(-30,30) * mouseX/width);
    }
  }