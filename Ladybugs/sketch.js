/*
make a bunch of ladybugs which are red circles with some black. 
translate (x,y) where x, y is middle of ladybug and draw elipse around it 
drawBug(x,y) is a method which does push(), translate(x,y), draw bug, pop()
give bug random timers for tweening as a property

use mousePressed to give movetomouse method an x and y coord and then use mouseReleased

*/
let numBug = 20;
let bugs = [];
let bug1;
let pressed = 0;
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  for(let i = 0; i < numBug; i++) {
    bugs.push (new ladybug(random(100, width - 100), random(100, height - 100), random(1, 4)))
  }
  
}
function draw() {
  background(200,250,200);
  for(let i = 0; i < numBug; i++) {
    bugs[i].update();
    bugs[i].draw();
  }
}

function ladybug(xInit, yInit, initTime) {
  this.clock = millis() / 1000;
  this.startX = width/2;
  this.startY = height + 50;
  this.speed = initTime;
  this.pct = 0;
  this.stopX = random(width);
  this.stopY = random(height);
  this.x = 0;
  this.y = 0;
  this.incr = 0.005 * initTime;
  this.timer = initTime * 1000;
  this.savedTime = millis();
  this.elapsedTime = 0;
  this.angle = 0;
  
  
  this.update = function() { 
    if(this.pct >= 1) {
      this.elapsedTime = millis() - this.savedTime;
      if(this.elapsedTime > this.timer) {
        this.savedTime = millis();
        this.startX = this.stopX;
        this.startY = this.stopY;
        if (pressed == 0) {
          this.stopX = random(width);
          this.stopY = random(height);
        } else if (pressed == 1) {
          this.stopX = mouseX;
          this.stopY = mouseY;
        }
        
        this.pct = 0;
      }
      
    }
    if(this.pct < 1) {
      this.pct += this.incr;
      this.x = this.startX + ((this.stopX - this.startX) * this.pct);
      this.y = this.startY + ((this.stopY - this.startY) * this.pct);
    }
    this.angle = atan((this.stopY - this.y)/(this.stopX - this.x));
    if(this.stopX < this.x) {
      this.angle += 180;
    }
  }
    
  this.draw = function() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    scale(0.7);
    line(-5, 0, -10, 12);
    line(0, 0, 0, 17);
    line(5, 0, 10, 12);
    line(-5, 0, -10, -12);
    line(0, 0, 0, -17);
    line(5, 0, 10, -12);
    line(0,-2, 20, -2);
    line(0,2, 20, 2);
    fill(200,0,0);
    ellipse(0,0,25,25);
    fill(0,0,0);
    ellipse(12,0,10,10);
    ellipse(0,6,3,3);
    ellipse(-7,-2,3,3);
    ellipse(3,-5,3,3);
    pop();
  }
}

function mousePressed() {
  pressed = 1;
}

function mouseReleased() {
  pressed = 0;
}