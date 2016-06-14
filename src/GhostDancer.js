class Ghost extends ImageDancer {
  constructor(top, left, timeBetweenSteps, width, height) {
    var width = Math.floor(Math.random() * 200 + 50);
    var height = Math.floor(Math.random() * 200 + 50);
    var src = `http://fillmurray.com/${width}/${height}`;
    super(top, left, timeBetweenSteps, src);
  }
  step() {
    this.top = this.top + Math.random() * 8 - 16;
  }
}