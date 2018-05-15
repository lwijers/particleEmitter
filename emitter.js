
class Emitter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particleList = [];
    this.reusabeParticles = [];
    this.counter = 0;
    this.outPutSpeed = 1;
    this.amount = 10;
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
      this.reusabeParticles.push(particle)
  }


  createParticle(){
    for (let i = 0; i < this.amount; i++) {
      if (this.reusabeParticles.length > 0) {
        var part = this.reusabeParticles.splice(0,1)[0]
        part.reset(this.x, this.y)
        this.particleList.push(part)
      } else {this.particleList.push(new SmokeParticle(this.x, this.y, 20));
      }
    }
  }

  update(){
    this.counter +=1;
    if (this.needForParticle()) {
      this.createParticle()
    }
    for (let i = 0; i < this.particleList.length; i++) {
    if (this.particleList[i].isDead) {
      this.makeParticleRecyclable(i);
    } else {
      this.particleList[i].update();
    }
  }
}

  show(){
    for (let i = 0; i < this.particleList.length; i++) {
      this.particleList[i].show();
    }
  }
}
