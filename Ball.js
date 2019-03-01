class Ball {
  constructor(x, y, vx = 0, vy = 0) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.vx = vx;
    this.vy = vy;
  }

  show() {
    fill(200, 0, 0);
    ellipse(this.x, this.y, this.width, this.height);
  }
  static collision(o1, o2) {
    let dx = (o1.x - o2.x);
    let dy = (o1.y - o2.y);
    let dist = dx * dx + dy * dy;
    if (dist < o1.width * o1.width) {
      o1.vy *= -1;
      o2.vy *= -1;
      o1.vx *= -1;
      o2.vx *= -1;
    }
    // console.log(dist);
  }
  checkEdges() {
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }
    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

}