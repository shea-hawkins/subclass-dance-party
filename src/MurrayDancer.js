class MurrayDancer extends ImageDancer {
  constructor(ctx, top, left, timeBetweenSteps, width, height) {
    var width = Math.floor(Math.random() * 200 + 50);
    var height = Math.floor(Math.random() * 200 + 50);
    var src = `http://fillmurray.com/${width}/${height}`;
    var className = 'murrayDancer';
    super(ctx, top, left, timeBetweenSteps, src, className);
  }
}

window['MurrayDancer'] = MurrayDancer;