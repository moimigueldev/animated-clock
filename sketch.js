let arm;
let timeArc;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  arm = new Arm();
  timeArc = new TimeArc();
}

function draw() {
  background('#E5DADA');
  translate(width / 2, height / 2);

  // UPDATE ARMS AND ARCS
  arm.update();

  // SECONDS ARM
  arm.showSeconds();

  // Minute ARM
  arm.showMinutes();

  // HOUR ARM
  arm.showHours();

  // SECONDS ARC
  timeArc.showSecondsArc();

  // MINUTE ARC
  timeArc.showMinuteArc();

  // HOUR ARC
  timeArc.showHourArc();

  // CENTER DOT
  stroke(255);
  strokeWeight(8);
  point(0, 0);
}

class TimeArc extends Arm {
  strokeWidth = 15;
  constructor() {
    super();
    this.a = 0;
  }

  update() {
    this.a += 1;
  }

  showSecondsArc() {
    push();
    stroke(this.secondColor);
    strokeWeight(this.strokeWidth);
    noFill();
    rotate(-90);
    arc(0, 0, 250, 250, 0, this.getSeconds());
    pop();
  }

  showMinuteArc() {
    push();
    stroke(this.minuteColor);
    strokeWeight(this.strokeWidth);
    noFill();
    rotate(-90);
    arc(0, 0, 300, 300, 0, this.getMinutes());
    pop();
  }

  showHourArc() {
    push();
    stroke(this.hourColor);
    strokeWeight(this.strokeWidth);
    noFill();
    rotate(-90);
    arc(0, 0, 350, 350, 0, this.getHours());
    pop();
  }
}
