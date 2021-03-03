let pos = [];
function setup() {
  createCanvas(300, window.innerHeight);
  frameRate(35);
  strokeWeight(1);
}

function draw() {
  background(240);
  pos.push(random(width), random(30, (height/5) + 30));
  
  for (i = 0; i < (pos.length - 1); i++) { 
    line(pos[2 * i], 
         pos[(2 * i) + 1], 
         pos[(2 * i) - 2], 
         pos[(2 * i) - 1]);
  }
  
  if (pos.length > 0) {
    for(i = 0; i < pos.length; i++) {
      
      if (i % 2 !== 0) {
        pos.splice(i, 1, (pos[i] + 5));
        
        if (pos[i] > window.innerHeight + 0) {
          pos.splice(0,2);
        }
      }
    }
  }
  text("number of active points: " + pos.length/2, 10,20);
}