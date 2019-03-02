class Ball {
  constructor(x, y, vx = 0, vy = 0) {
    this.r = createVector(x, y);
    this.d = 10;
    this.v = createVector(vx, vy);
  }

  show() {
    fill(200, 0, 0);
    ellipse(this.r.x, this.r.y, this.d, this.d);
  }
  static collision(o1, o2) {
    let v12 = p5.Vector.sub(o2.v, o1.v);
    v12.mult(0.5);
    let r12 = p5.Vector.sub(o2.r, o1.r);
    let vm = p5.Vector.add(o1.v, o2.v);
    vm.mult(0.5);
    if (r12.mag() < o1.d) {
      r12.normalize();
      let rd = r12.copy();
      rd.mult(o1.d / 2);
      let tan = createVector(-r12.y, r12.x);
      tan.mult(tan.dot(v12));
      r12.mult(r12.dot(v12));
      let v = p5.Vector.sub(tan, r12);
      o1.v = p5.Vector.sub(vm, v);
      o2.v = p5.Vector.add(vm, v);
      let rm = p5.Vector.add(o2.r, o1.r);
      rm.mult(0.5);
      o1.r = p5.Vector.sub(rm, rd);
      o2.r = p5.Vector.add(rm, rd);
    }
  }
  checkEdges() {
    if (this.r.y < 0 || this.r.y > height) {
      this.v.y *= -1;
      if (this.r.y < 0) {
        this.r.y = 0;
      }
      if (this.r.y > height) {
        this.r.y = height;
      }
    }
    if (this.r.x < 0 || this.r.x > width) {
      this.v.x *= -1;
      if (this.r.x < 0) {
        this.r.x = 0;
      }
      if (this.r.x > width) {
        this.r.x = width;
      }
    }
  }
  update() {
    this.r.add(this.v);
  }

}