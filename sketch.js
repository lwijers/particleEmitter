let emitter;

function setup() {
  createCanvas(800,800)
  emitter = new Emitter(200, 200)
}

function draw() {
  background(0);
  emitter.show()
}


class Particle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size
  }


  update(){
  }

  show(){
    fill(255, 255)
    ellipse(this.x, this.y, this.size)
  }
}

class Emitter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particleList = [];
    this.amount = amount;
    this.particleList.push(new Particle(this.x, this.y, 200))
  }


  update(){
    for (let i = 0; i < this.particleList.length; i++) {
      this.particleList[i].update();
    }

  }

  show(){
    for (let i = 0; i < this.particleList.length; i++) {
      // particles[i].update();
      this.particleList[i].show();
    }
  }
}
