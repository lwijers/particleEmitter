let emitter;
let allParticles = [ColorParticle, ParticleObject];

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
  fill(255)
  text(`particles in array: ${emitter.particleList.length}`, 50,50);
  text(`particles in recycelist: ${emitter.reusabeParticles.length}`, 50,60);


function switchParticle() {
  if (keyPressed()) {
    return true
  }
}

}
