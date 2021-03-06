// Creates and returns a new dancer object that can step

const SPEED = 70000;

class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.destination = [500, 500];
    this.timeBetweenSteps = timeBetweenSteps;
    this.isBusy = false;
  }
  computeDistance(entity) {
    return Math.sqrt(Math.pow(entity.left - this.left, 2) + Math.pow(entity.top - this.top, 2)); 
  }
  step() {
    if (this.destination.length === 2) {
      this.stepToPoint();
    }
  }
  setDestination(x, y) {
    let c = window['canvas'];
    x = x < 0 ? -x / 2 : x;
    x = x > c.width ? (c.width - x) / 2 : x;
    y = y < 0 ? -y / 2 : y;
    y = y > c.height ? (c.height - y) / 2 : y;
    this.destination = [x, y]; 
  }
  setBusyDestination(x, y) {
    this.isBusy = true;
    this.setDestination(x, y);
    setTimeout(() => this.isBusy = false, 3000);
  }
  stepToPoint() {
    let [destX, destY] = this.destination;
    var dx = destX - this.left;
    var dy = destY - this.top;
    this.left += dx * this.timeBetweenSteps / SPEED;
    this.top += dy * this.timeBetweenSteps / SPEED;
  }
}
