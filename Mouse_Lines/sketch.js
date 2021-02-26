function setup() {
      createCanvas(700, 700);
      strokeWeight(2);
  }

  function draw() {
      background(0);
      stroke(255,0,0);
      for(let i = 10; i < mouseX; i = i + 10){
          line(i, 0, 0, i);  
      }
      stroke(0,255,0);
      for(let i = 10; i < mouseX; i = i + 10){
          line(width - i, width, width, width - i);  
      }
      stroke(0,0,255);
      for(let i = 10; i < mouseY; i = i + 10){
          line(0, width - i, width - i, width);  
      }
      stroke(255,255,0);
      for(let i = 10; i < mouseY; i = i + 10){
          line(height, i, i, 0);  
      }
  }
