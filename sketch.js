var hr;
var min;
var sec;
var scAngle, hrAngle, mnAngle;

function setup() {
  createCanvas(500,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
   hr = hour();
   min = minute();
   sec = second();

  scAngle = map(sec, 0, 60, 0, 360);
  mnAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);
   
  push() 
  rotate(scAngle);
    strokeWeight(7);
    stroke("blue");
    line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
    strokeWeight(7);
    stroke(255,0,0);
    line(0,0,75,0);
  pop();

  push();
   rotate(hrAngle);
    strokeWeight(7);
    stroke("white");
    line(0,0,50,0);    
   pop();

    stroke(255,0,255);
    point(0,0);
    strokeWeight(10);
    noFill();
    stroke("blue");
    arc(0,0,300,300,0,scAngle);
    stroke(255,0,0);
    arc(0,0,280,280,0,mnAngle);
    stroke("white");
    arc(0,0,260,260,0,hrAngle);

  drawSprites();
}