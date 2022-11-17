//GLOBAL VARIABLES
NSIDES=5;
COLOR = [0,0,0];
ABSOLUTEPOSITIONX = 320;
ABSOLUTEPOSITIONY = 200;
RADIUSSIZE = 50;

function setup(){
  createCanvas(640, 400);
  for(let i = 0; i < 3; i++){
    COLOR[i] = random(0,255);
  }
}

function draw(){
  background(220);
  fill(COLOR[0],COLOR[1],COLOR[2]);
  polygon(ABSOLUTEPOSITIONX, ABSOLUTEPOSITIONY, RADIUSSIZE, NSIDES);
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mouseClicked(){
  NSIDES++;
  for(let i = 0; i < 3; i++){
    COLOR[i] = random(0,255);
  }
  if(NSIDES > 12){
    NSIDES = 5;
  }  
}
