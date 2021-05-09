//keyboard vars
let board;
let blackKeys = [1, 1, 0, 1, 1, 1, 0, 1, 1];
let whiteBinds = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
let blackBinds = ["w", "e", "", "t", "y", "u", "", "o", "p"];

//grid vars
let gridRes;
let gridRows, gridCols;
let gXoff, gYoff, gZoff = 1;
let gridInc = 0.015;
let gValue;
let gStart = 0;

//jelly vars
let jellys = [];
let jellyLoc = [];

let asdf;
let jellySpawnInc;

//sounds
let soundBank = [];

//sliders
let speedSlider, sliderText, sliderValue, instructionButton, dly1btn, dly2btn;
let iToggle = 1;
let d1Tog = 1;
let d2Tog = 1;

function preload() {
  soundFormats('mp3');
  soundBank.push(loadSound('sounds/C1'));
  soundBank.push(loadSound('sounds/D1'));
  soundBank.push(loadSound('sounds/E1'));
  soundBank.push(loadSound('sounds/F1'));
  soundBank.push(loadSound('sounds/G1'));
  soundBank.push(loadSound('sounds/A1'));
  soundBank.push(loadSound('sounds/B1'));
  soundBank.push(loadSound('sounds/C2'));
  soundBank.push(loadSound('sounds/D2'));
  soundBank.push(loadSound('sounds/E2'));

  soundBank.push(loadSound('sounds/Csharp1'));
  soundBank.push(loadSound('sounds/Eb1'));
  soundBank.push(loadSound('sounds/Fsharp1'));
  soundBank.push(loadSound('sounds/Gsharp1'));
  soundBank.push(loadSound('sounds/Bb1'));
  soundBank.push(loadSound('sounds/Csharp2'));
  soundBank.push(loadSound('sounds/Eb2'));
}

function setup() {
  //create canvas
  createCanvas(window.innerWidth,
    window.innerHeight);
  board = new Keyboard(window.innerWidth, window.innerHeight);

  //grid vars
  gridRes = width / 15
  gridRows = max(width, height) / gridRes;
  gridCols = max(width, height) / gridRes;

  //jelly setup
  jellySpawnInc = (width - 200) / 10;

  asdf = height;
  
  //slider
  speedSlider = createSlider(1, 5, 2, 1);
  speedSlider.position(10,height-45);
  sliderText = createP("Jellyfish Speed: " + sliderValue)
  sliderText.style('color', 'white');
  sliderText.position(10, height - 47);
  
  //button
  instructionButton = createButton("Instructions");
  instructionButton.position(0, 0);
  instructionButton.mousePressed(instructionToggle);
  instructionButton.style('color', 'aqua');
  instructionButton.style('background', 'black');
  
  dly1btn = createButton('Horizontal Delay');
  dly1btn.position(80, 0);
  dly1btn.mousePressed(d1Toggle);
  dly1btn.style('color', 'aqua');
  dly1btn.style('background', 'black');
  
  dly2btn = createButton('Vertical Delay');
  dly2btn.position(190, 0);
  dly2btn.mousePressed(d2Toggle);
  dly2btn.style('color', 'aqua');
  dly2btn.style('background', 'black');
  
}

function d1Toggle() {
  d1Tog = d1Tog * -1;
}

function d2Toggle() {
  d2Tog = d2Tog * -1;
}

function instructionToggle() {
  iToggle = iToggle * -1;
}

function draw() {
  background(0, 0, 100);
  grid(gridRes);
  
  sliderValue = speedSlider.value();
  sliderText.html("Jellyfish Speed: " + sliderValue)
  
  if (iToggle == 1) {
    textSize(40);
    fill(255);
    strokeWeight(5);
    stroke(0, 200, 170);
    textAlign(CENTER,CENTER);
    text("Instructions", width/2, height/5);
    textSize(20);
    strokeWeight(2);
    text("Use the keys on your keyboard to play the notes.", width/2, height/3.5);
    text("w  e     t  y  u    o  p", width/2, height/3.1);
    text("a  s  d  f  g  h  j  k  l  ;", width/2, height/2.8);
    text("Use the button in the top left to toggle the visibility of these instructions.", width/2, height/2.5);
    text("Use the slider in the bottom left to change the speed of the jellyfish.", width/2, height/2.3);
    text("Use the delay buttons to toggle the note retrigger lines.", width/2, height/2.13);
  }
  
  for (i = 0; i < jellys.length; i++) {
    jellys[i].drawBody(jellyLoc[i * 2], jellyLoc[i * 2 + 1]);
  }

  for (i = 0; i < jellyLoc.length; i++) {
    if (i % 2 != 0) {
      jellyLoc[i] -= sliderValue;
      if (jellyLoc[i] < -100 || jellys.length > 24) {
        jellys.splice(0, 1);
        jellyLoc.splice(0, 2);
      }
    }
    
    if (i % 2 == 0 && jellyLoc[i + 1] < height / 1.5) {
      jellyLoc[i] += 10 - jellyLoc[i + 1] / 50;
    }
  }
  board.display();
}

function grid(res) {
  strokeWeight(0);
  gValue = 4;
  gYoff = gStart;
  
  for (let i = 0; i < gridRows; i++) {
    gXoff = 300;
    
    for (let j = 0; j < gridCols; j++) {
      n = noise(gXoff, gYoff, gZoff * 0.07) * 255;
      fill(n / 3, 0, n*1.1);
      rect(i * res, j * res, res, res)
      gXoff += gridInc * gValue;
    }
    
    gYoff += gridInc * gValue;
  }
  
  gZoff += gridInc * gValue;
  gStart -= gridInc * gValue * 0.17;
}

class Keyboard {
  constructor(bound1, bound2) {
    this.xS = bound1 - 100;
    this.y = bound2 - 50;
    this.inc = (bound1 - 200) / 10;
  }

  display() {
    strokeWeight(3);
    stroke(0, 120, 255);
    
    if (d1Tog == 1) {
      line(100, height / 1.5, width - 100, height / 1.5);
    }
    
    if(d2Tog == 1) {
      line(width - 50, 0, width - 50, height - 50);
    }
    
    stroke(0, 120, 255);
    drawWhite(this.inc, 100);
    drawBlack(this.inc, 100);
  }
}

function keyPressed() {
  if (key === "a") {
    jellys.push(new jellyfish(0));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();
    jellyLoc.push(jellySpawnInc * 0.5 + 100, height);
  }
  if (key === "s") {
    jellys.push(new jellyfish(1));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 1.5 + 100, height);
  }
  if (key === "d") {
    jellys.push(new jellyfish(2));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 2.5 + 100, height);
  }
  if (key === "f") {
    jellys.push(new jellyfish(3));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();
    jellyLoc.push(jellySpawnInc * 3.5 + 100, height);
  }
  if (key === "g") {
    jellys.push(new jellyfish(4));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();
    jellyLoc.push(jellySpawnInc * 4.5 + 100, height);
  }
  if (key === "h") {
    jellys.push(new jellyfish(5));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();
    jellyLoc.push(jellySpawnInc * 5.5 + 100, height);
  }
  if (key === "j") {
    jellys.push(new jellyfish(6));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 6.5 + 100, height);
  }
  if (key === "k") {
    jellys.push(new jellyfish(7));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 7.5 + 100, height);
  }
  if (key === "l") {
    jellys.push(new jellyfish(8));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 8.5 + 100, height);
  }
  if (key === ";") {
    jellys.push(new jellyfish(9));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 9.5 + 100, height);
  }
  if (key === "w") {
    jellys.push(new jellyfish(10));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 1 + 100, height);
  }
  if (key === "e") {
    jellys.push(new jellyfish(11));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 2 + 100, height);
  }
  if (key === "t") {
    jellys.push(new jellyfish(12));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 4 + 100, height);
  }
  if (key === "y") {
    jellys.push(new jellyfish(13));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 5 + 100, height);
  }
  if (key === "u") {
    jellys.push(new jellyfish(14));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 6 + 100, height);
  }
  if (key === "o") {
    jellys.push(new jellyfish(15));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 8 + 100, height);
  }
  if (key === "p") {
    jellys.push(new jellyfish(16));
    jellys[jellys.length - 1].tentinit();
    jellys[jellys.length - 1].playNote();

    jellyLoc.push(jellySpawnInc * 9 + 100, height);
  }
}

function drawWhite(inc, off) {
  noFill();
  for (i = 0; i < 10; i++) {
    if (keyIsPressed && key === whiteBinds[i]) {
      fill(255);
    } else {
      noFill();
    }
    rect(off + inc * i,
      height - 200,
      inc,
      150);
  }
}

function drawBlack(inc, off) {
  for (i = 0; i < 10; i++) {
    if (keyIsPressed && key === blackBinds[i]) {
      fill(255);
    } else {
      fill(0, 200, 255);
    }

    if (blackKeys[i] == 1) {
      rect(off + (inc / 2) + 15 + inc * i, height - 200, inc - 30, 100);
    }
  }
}

class jellyfish {
  constructor(noteVal) {
    this.xoff = random(0, 300);
    this.yoff = random(0, 300);
    this.zoff = random(0, 300);
    this.phase = 0;
    this.tent = [];
    this.note = noteVal;
    this.del1 = 0;
    this.del2 = 0;
  }
  
  tentinit() {
    this.tent.push(new tentacle());
    this.tent.push(new tentacle());
    this.tent.push(new tentacle());
    this.tent.push(new tentacle());
    this.tent.push(new tentacle());
    this.tent.push(new tentacle());
  }

  playNote() {
    playSound(this.note);
  }

  drawBody(x1, y1) {

    this.tent[0].draw(x1, y1, this.note);
    this.tent[1].draw(x1, y1, this.note);
    this.tent[2].draw(x1, y1, this.note);
    this.tent[3].draw(x1, y1, this.note);
    this.tent[4].draw(x1, y1, this.note);
    this.tent[5].draw(x1, y1, this.note);

    push();
    translate(x1, y1);
    scale(0.3);
    beginShape();

    if (this.note > 9) {
      fill(0, 150, 150, 255);
    } else {
      fill(180, 0, 100, 255);
    }

    //Line detection
    if (y1 < height / 1.45 && y1 > height / 1.6 && d1Tog == 1) {
      fill(255, 255, 255);
      if (this.del1 == 0) {
        this.playNote();
        this.del1 = 1;
      }
    }
    if (x1 > width - 70 && x1 < width - 20 && d2Tog == 1) {
      fill(255, 255, 255);
      if (this.del2 == 0) {
        this.playNote();
        this.del2 = 1;
      }
    }

    if (this.note > 9) {
      stroke(0, 250, 150, 150);
    } else {
      stroke(220, 0, 100, 150)
    }

    
    strokeWeight(20);
    for (let a = 0; a < TWO_PI; a += 0.2) {

      this.xoff = map(cos(a + this.phase), -1, 1, 0, 1);
      this.yoff = map(sin(a + this.phase), -1, 1, 0, 1);

      let r = map(noise(this.xoff, this.yoff, this.zoff), 0, 1, 50, 100);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
      this.xoff += 0.1;
      this.yoff += 0.1;
    }
    endShape(CLOSE);
    this.zoff += 0.008;
    this.phase += 0.001;

    pop();
  }
}

class tentacle {
  constructor() {
    this.off = random(0, 300);
    this.init = random(-50, 50)
    this.length = random(100, 170);
  }

  draw(x1, y1, note) {
    push();
    translate(x1, y1);
    scale(0.3);
    beginShape();
    noFill();
    
    if (note > 9) {
      stroke(0, 250, 150, 80);
    } else {
      stroke(220, 0, 100, 80)
    }
    
    strokeWeight(20);
    for (let i = 0; i < this.length; i += 1) {
      let y2 = 40 + 3 * i;
      let x2 = i / 1.5 * map(noise(i / 50, this.off), 0, 1, -3, 3) + this.init;
      vertex(x2, y2);
    }
    this.off += 0.01;
    endShape();
    pop();
  }
}

function playSound(val) {
  soundBank[val].play();
}