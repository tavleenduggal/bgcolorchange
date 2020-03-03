function setup() {
  createCanvas(800,400);
  }

function draw() {
  var r=map(mouseX,0,800,0,255)
  var b=map(mouseX,0,800,0,255);
  var g=map(mouseX,0,800,0,255);
  background(r,g,b);  
  drawSprites();
}