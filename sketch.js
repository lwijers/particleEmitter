let emitter;

function setup() {
  createCanvas(800,800)
  emitter = new Emitter(400,780);
}

function draw() {
  background(0);

  emitter.x = mouseX
  emitter.y = mouseY
  emitter.update();
  emitter.show();
}


class Particle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.vx = random(-2,2);
    this.vy = random(-5,-1);
    this.size = size;
    this.alpha = 255;
    this.fadeSpeed = random(7, 8)
    this.growSpeed = random(0.1, 2)
    this.isDead = false;
    this.color = random(100, 255);
  }

  reset(x, y) {
    this.isDead = false;
    this.alpha = 255;
    this.x = x;
    this.y = y;
    this.size = 20;
  }
  // this.color = 170;

  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.fadeSpeed;
    this.size += this.growSpeed;

    if (this.alpha <= 0) {
      this.isDead = true;
    }
  }

  show(){
    fill(this.color, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}




class Emitter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particleList = [];
    this.reusabeParticles = [];
    this.counter = 0;
    this.outPutSpeed = 1;
  }

  needForParticle(){
    if ( this.counter % this.outPutSpeed === 0) {
      return true;
    }
    return false;
  }

  particleAvailable() {
    if (this.reusabeParticles.length > 0) {
      return true
    }
    return false
  }

  makeParticleRecyclable(index) {
    let particle =  this.particleList.splice(index,1)[0];
      particle.reset(this.x, this.y)
      this.reusabeParticles.push(particle)
      // console.log(particle);
  }


  createParticle(){
    // console.log(this.particleList.length);
    if (this.reusabeParticles.length > 0) {
        this.particleList.push(this.reusabeParticles.splice(0,1)[0])
    } else {this.particleList.push(new Particle(this.x, this.y, 20));

  }
}


  update(){
    this.counter +=1;
    if (this.needForParticle()) {
      this.createParticle()
    }

    for (let i = 0; i < this.particleList.length; i++) {
    // console.log(this.particleList);
    if (this.particleList[i].isDead) {
      this.makeParticleRecyclable(i);
    } else {
      this.particleList[i].update();
    }
    // console.log(this.particleList[i]);
  }

}
  show(){
    for (let i = 0; i < this.particleList.length; i++) {
      this.particleList[i].show();
    }
  }
}
