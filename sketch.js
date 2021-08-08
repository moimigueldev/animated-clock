let arm;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  arm = new Arm();
}

function draw() {
  background(50);
  translate(width / 2, height / 2);

  // SECONDS ARM
  arm.update();
  arm.showSeconds();

  // Minute ARM
  arm.showMinutes();

  // HOUR ARM
  arm.showHours();

  // CENTER DOT
  stroke(255);
  strokeWeight(8);
  point(0, 0);
}

class Arm {
  constructor() {
    this.seconds = this.getSeconds();
    this.minutes = this.getMinutes();
    this.hours = this.getHours();
  }

  update() {
    this.seconds = this.getSeconds();
    this.minutes = this.getMinutes();
    this.hours = this.getHours();
  }

  showSeconds() {
    push();
    strokeWeight(5);
    rotate(this.seconds);
    stroke('#E59500');
    line(0, 0, 0, -height / 3.8);
    pop();
  }

  showMinutes() {
    push();
    strokeWeight(5);
    rotate(this.minutes);
    stroke('#840032');
    line(0, 0, 0, -height / 4);
    pop();
  }

  showHours() {
    push();
    strokeWeight(5);
    rotate(this.hours);
    stroke('#002642');
    line(0, 0, 0, -height / 5.5);
    pop();
  }

  getMinutes() {
    return map(new Date().getMinutes(), 0, 60, 0, 360);
  }

  getHours() {
    return map(new Date().getHours() - 12, 0, 12, 0, 360);
  }

  getSeconds() {
    return map(new Date().getSeconds(), 0, 60, 0, 360);
  }
}
