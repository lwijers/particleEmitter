
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
    } else {this.particleList.push(new ColorParticle(this.x, this.y, 20));

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
