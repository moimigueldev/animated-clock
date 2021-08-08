let angle = 0;

function setup() {
  createCanvas(400, 400);
  // put setup code here
  angleMode(DEGREES);
}

function draw() {
  background(50);
  translate(width / 2, height / 2);

  noFill();
  stroke(255);
  strokeWeight(2);
  push();
  rotate(-90);
  arc(0, 0, 50, 50, 0, angle);
  pop();

  angle += 1;
}
