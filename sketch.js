let balls = [];
let anzahl = 80;

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.position(20, 20);
  for (let i = 0; i < anzahl; i++) {
    let x = i * width / anzahl;
    let y = i * height / anzahl;
    balls.push(new Ball(x, y, 3, -3));
  }
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