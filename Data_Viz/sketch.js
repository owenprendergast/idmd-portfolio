function preload() {
  cover = loadImage("TLW.jpg");
  logo = loadImage("Spotify.png");
}

let listeners = [11, 5, 3, 2, 7, 7, 8, 15, 8, 5, 4, 4, 4, 4, 4];
let streams = [45, 12, 9, 4, 30, 53, 21, 175, 42, 80, 35, 14, 14, 43, 33];
let followers = [18, 18, 18, 18, 18, 18, 18, 20, 21, 21, 21, 21, 21, 21, 21];
let dateRange = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
let maxArray = [];
let days = 15;
let indent = 200;
let xPos = [];
let redTog = 1;
let bluTog = 1;
let greTog = 1;
let check1 = truMax();
let movTog = 0;
let liveMax = truMax();
let holdMax = 0;
let incr = 0;
let colors;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textAlign(CENTER, CENTER);
  formx(indent);
  colors = [color(150, 255, 200), color(150, 255, 200, 80), color(150, 200, 255), color(150, 200, 255, 80), color(250, 150, 150), color(250, 150, 150, 80)];
}

function draw() {
  background(240);
  text("SPOTIFY DATA 1 WEEK BEFORE AND AFTER ALBUM RELEASE", width/2, height - 50);
  yaxis(indent);
  xaxis(indent);
  check2 = truMax();
  //print(check1 + " " + check2);
  if(check1 != check2 && check2 >= 0) {
    if (check1 < 0) {
      check1 = 0
    }
    movTog = 1;
    holdMax = abs(check1-check2);
    if(check1 > check2) {
      incr = -1;
      
    } else {
      incr = 1;
    }
    liveMax = check1
  }
  
  if(movTog == 1) {
    liveMax = liveMax + incr;
    if(liveMax == truMax()) {
      movTog = 0;
    }
  }
  
  if (greTog == 1) {
    drawPoints(followers, 0);
  }
  if (bluTog == 1) {
    drawPoints(listeners, 2);
  }
  if (redTog == 1) {
    drawPoints(streams, 4);
  }
  
  keydraw();
  
  check1 = truMax();
}

function mousePressed() {
  if(mouseX > width - 280 && mouseX < width - 260 && movTog == 0) {
     if(mouseY > 30 && mouseY < 50) {
       redTog = redTog * -1;
     } else if (mouseY > 70 && mouseY < 90) {
       bluTog = bluTog * -1;
     } else if (mouseY > 110 && mouseY < 130) {
       greTog = greTog * -1;
     }
  }
}


function keydraw() {
  fill(70);
  rect(width - 300, 10, 290 , 140);
  
  if (redTog == 1) {
    fill(255,150,150);
  } else {
    fill(200);
  }
  rect(width - 280, 30, 20 , 20);
  fill(255,150,150);
  textSize(20);
  text("STREAMS", width - 200, 40)
  if (bluTog == 1) {
    fill(150,200,255);
  } else {
    fill(200);
  }
  rect(width - 280, 70, 20 , 20);
  fill(150,200,255);
  text("UNIQUE LISTENERS", width - 155, 80)
  if (greTog == 1) {
    fill(150,255,200);
  } else {
    fill(200);
  }
  rect(width - 280, 110, 20 , 20);
  fill(150,255,200);
  text("FOLLOWERS", width - 187, 120)
  fill(0);
 
}

function truMax() {
  if (redTog == 1) {
    maxArray.push(Math.max(...streams));
  }
  if (bluTog == 1) {
    maxArray.push(Math.max(...listeners));
  }
  if (greTog == 1) {
    maxArray.push(Math.max(...followers));
  }
  final = Math.max(...maxArray);
  maxArray = [];
  return final
}

function ynum() {
  strmInc = liveMax/10;
  return strmInc
}

function yaxis(indent) {
  strokeWeight(1);
  line(indent, indent, indent, height-indent);
  textSize(30);
  text("#", indent/2, height/2);
  textSize(15);
  yx = (height - (indent * 2));
  for(i = 0; i < 10; i++) {
    line(indent - 5,
         indent + yx/10 * i, 
         indent + 5, 
         indent + yx/10 * i);
    strokeWeight(0);
    //print(nf(ynum(), 2,1))
    text(nf((ynum() * (10 - i)), 1, 1),
         indent - 30, 
         indent + yx/10 * i);
    strokeWeight(1);
  }
}

function formx(indent) {
  for (i = 0; i < days; i++) {
    xPos.push(indent + (width - (indent * 2))/days * (i+1))
  }
}

function xaxis(indent) {
  strokeWeight(1);
  line(indent, height-indent, width - indent, height-indent);
  strokeWeight(0);
  textSize(25)
  text("DAY OF AUGUST", width/2, height-indent/2)
  textSize(15)
  strokeWeight(1);
  for(i = 0; i < days; i++) {
    line(xPos[i],
         height - indent - 5,
         xPos[i],
         height - indent + 5);
    strokeWeight(0);
    text(dateRange[i], 
         xPos[i], 
         height - indent + 22);
    strokeWeight(1);
  }  
}

function drawPoints(x, clr) {
  for(i = 0; i < days; i++) {
    y1 = map(x[i], 0, liveMax, indent, height-indent);
    if (i < (days-1)) {
      y2 = map(x[i+1], 0, liveMax, indent, height-indent);
    }
    
    strokeWeight(0);
    stroke(colors[clr]);
    fill(colors[clr]);
    ellipse(xPos[i], height - y1, min((y1*y1)*0.0001, 100), min((y1*y1)*0.0001, 100));
    strokeWeight(1);
    
    if (i < (days-1)) {
      line(xPos[i], height - y1, xPos[i+1], height - y2);  
    }
    
    if (dist(xPos[i], height - y1, mouseX, mouseY) < (y1*y1)*0.0001) {
      strokeWeight(1);
      stroke(colors[clr + 1]);
      line(indent, height - y1, xPos[i], height - y1);
      line(xPos[i], height - indent, xPos[i], height - y1);
      stroke(0);
      fill(0);
      textSize(15)
      text(x[i], xPos[i], height-y1 - min((y1*y1)*0.0001, 100) - 10);
    }
    
    stroke(0);
    fill(0);
    strokeWeight(0);
    textSize(max(15, y1*0.07));
    
  }
}