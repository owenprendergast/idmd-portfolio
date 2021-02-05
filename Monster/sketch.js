var a, angle, page, eyeDirection, value, direction, xInit, yInit, target, pressed;
function setup() {
  createCanvas(1000, 800);
  a = 0;
  angle = 0;
  page = 0;
  eyeDirection = 0;
  xInit = width/2;
  yInit = height/2 + 100;
  target = 200;
  value = 0;
  direction =  1;
  pressed = 0;
  //frameRate(5);
}

function draw() {
  background(255, 232, 255);
  text("Hold down any key to make 2 more monsters appear.", 10, 20)
  fill(0);
  push();
  monster(xInit, yInit - value);
  pop();
  
  if (keyIsPressed == true) {
    push();
    monster(xInit + 330, yInit - value);
    pop();
    push();
    monster(xInit - 330, yInit - value);
    pop();
  }
  
  
  rect(0,height - 10, width, 10)
  if (page == 0){
    value = 0;
    direction = 1;
    eyeDirection = mouseX;
    eyeDirection = map(eyeDirection, 0, 1000, -20, 20);
    if (eyeDirection > 20) {
      eyeDirection = 20;
    }
  } else if (page == 1 && pressed == 0) {
      if(direction == 1) {
      value += ease(target, value, 15);
      if (value > 190) {
        direction *= -1;
      }
    } else if (direction == -1){
      value -= ease(target, value, 15);
      //print(value);
      if (value < 10) {
        direction *= -1;
      }
    }
  }
}

function ease(target, current, ease) {
  return (target-current)/ease;
}

function mousePressed() {
  page = 1 - page
  yInit += 50;
  pressed = 1;
}

function mouseReleased() {
  yInit -= 50;
  pressed = 0;
}

function monster(x,y){
  head(x, y);
  body(x, y);
}

function head(x,y){
  noStroke();
  fill(0,255,0);
  rect(x-10, y-250, 20, 300);
  ellipse(x,y-250,100,100);
  fill(0);
  ellipse(x,y-250,80,80);
  fill(255);
  ellipse(x,y-250,70,70);
  eye (x + eyeDirection, y);
  
}
function eye(x,y) {
  
  fill(245, 66, 155);
  ellipse(x,y-250,30,30);
  fill(0);
  ellipse(x,y-250,10,10);
}


function body(x, y) {
  fill(0,255,0);
  noStroke();
  ellipse(x, y+100, 300,250);
  rect(x-100,y+100,50, 200);
  rect(x + 50,y+100,50, 200);
  fill(245, 66, 155);
  ellipse(x, y + 100, 215, 215);
  fill(0);
  ellipse(x, y + 100, 200, 200);
  translate(x,y+ 100);
  rotate(radians(a));
  a += 1;
  // x, y, number of teeth
  mouth(x,y, 9);
}

function mouth (x,y, count){
  angle = 360/count;
  for (let i = 0; i < count; i++){
    teeth(x,y, angle);
  }
}

function teeth(x,y, offset) {
  fill(255); 
  rotate(radians(offset));
  triangle(-100,-15,-100,15,-50,0)
}