
let jellys = [];
let jellycount = 3;
function setup() {
  createCanvas(700, 700);
  
  for(i = 0; i < jellycount; i++) {
    
    jellys.push(new jellyfish(random(100, width-100),
                              random(100, width-100),
                              random(0, TWO_PI)));
    jellys[i].tentinit();
  }
  
}

function draw() {
  background(0,0,100);

  for(i = 0; i < jellycount; i++) {
     jellys[i].drawBody();
  }


}  


function jellyfish(x1, y1, r1) {
  this.xoff = random(0, 300);
  this.yoff = random(0, 300);
  this.zoff = random(0, 300);
  this.phase = 0;
  this.tent = [];
  //this.tentacles = random(5,9);
  
  this.tentinit = function() {
    //for (i = 0; i < this.tentacles; i++){
    this.tent.push(new tentacle(x1,y1,r1));
    this.tent.push(new tentacle(x1,y1,r1));
    this.tent.push(new tentacle(x1,y1,r1));
    this.tent.push(new tentacle(x1,y1,r1));
    this.tent.push(new tentacle(x1,y1,r1));
    this.tent.push(new tentacle(x1,y1,r1));
    this.tent.push(new tentacle(x1,y1,r1));
    this.tent.push(new tentacle(x1,y1,r1));
    this.tent.push(new tentacle(x1,y1,r1));
    this.tent.push(new tentacle(x1,y1,r1));
      
    //}
  }
  this.drawBody = function() {
    //for(i=0; i < 7; i++) {
      //this.tent[i].draw();
    //}
    this.tent[0].draw();
    this.tent[1].draw();
    this.tent[2].draw();
    this.tent[3].draw();
    this.tent[4].draw();
    this.tent[5].draw();
    this.tent[6].draw();
    this.tent[7].draw();
    this.tent[8].draw();
    this.tent[9].draw();

    
    push();
    translate(x1, y1);
    rotate(r1)
    scale(0.5);
    beginShape();
    fill(180,0,100,255);
    stroke(220,0,100,150)
    strokeWeight(20);
    for (let a = 0; a < TWO_PI; a+=0.1) {
      
      this.xoff = map(cos(a+this.phase), -1, 1, 0, 1);
      this.yoff = map(sin(a+this.phase), -1, 1, 0, 1);


      let r = map(noise(this.xoff,this.yoff,this.zoff), 0, 1, 50, 100);
      let x = r*cos(a);
      let y = r*sin(a);
      vertex(x,y);
      this.xoff += 0.1;
      this.yoff += 0.1;
    }
    endShape(CLOSE);
    this.zoff += 0.008;
    this.phase += 0.001;
    
    pop();

  }
}

function tentacle(x1,y1,r1) {
  this.off = random(0, 300);
  this.init = random(-50,50)
  this.length = random(100, 170);
  
  this.draw = function() {
    push();
    translate(x1, y1);
    rotate(r1);
    scale(0.5);
    beginShape();
    noFill();
    stroke(220,0,100,80)
    strokeWeight(10);
    for (let i = 0; i < this.length; i += 1)  {
      let y2 = 40 + 3*i;
      let x2 = i/1.5 * map(noise(i/50, this.off), 0, 1, -3, 3) + this.init;   
      vertex(x2, y2);
    }
    this.off += 0.01;
    endShape();
    pop();
  }
}