class ParticleObject {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.size = 5;
    this.alpha = 255;
    this.fadeSpeed = 1;
    // this.growSpeed = random(0.1, 2)
    this.isDead = false;
    // this.color = random(100, 255);
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);
  }

  reset(x, y) {
    this.isDead = false;
    this.alpha = 255;
    this.x = x;
    this.y = y;
    this.size = 5;
    this.R = random(0, 255);
    this.G = random(0, 255);
    this.B = random(0, 255);
  }
  // this.color = 170;

  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.fadeSpeed;
    // this.size += this.growSpeed;

    if (this.alpha <= 0) {
      this.isDead = true;
    }
  }

  show(){
    noStroke()
    fill(this.red, this.green, this.blue, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}
