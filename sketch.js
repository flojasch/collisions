let balls = [];
let anzahl = 200;
let rad = 10;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  // let canvas = createCanvas(800, 600);
  // canvas.position(20, 20);
  let y = 0;
  let x = 0;
  for (let i = 0; i < anzahl; i++) {
    if (x < width - 2 * rad - 1) {
      x += 2 * rad + 1;
    } else {
      x = 0;
      y += 2 * rad + 1;
    }
    balls.push(new Ball(x, y, 10, 0, 5));
  }
  balls.push(new Ball(width / 2, height / 2, 50, 0, 0, 0, 0, 200));
  // balls.push(new Ball(width / 2 + 200, height / 2, 20, -3, 2, 0, 0, 200));
}

function draw() {
  background(100);
  for (let i = 0; i < balls.length; ++i) {
    for (let j = i + 1; j < balls.length; j++) {
      Ball.collision(balls[i], balls[j]);
    }
  }
  for (ball of balls) {
    ball.checkEdges();
    ball.update();
    ball.show();
  }

}