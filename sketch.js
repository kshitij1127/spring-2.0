let bob;
let anchor;

let spring;

let restLength = 200;
let k = 0.01;
let gravity;

function setup() {
  createCanvas(600, windowHeight);
  bob = new Particle(350, 300);
  anchor = new Particle(300, 0);
  spring = new Spring(0.01, 200, bob, anchor);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(112, 50, 126);
  spring.show();
  spring.update();
  bob.update();
  anchor.update();
  bob.show();
  anchor.show();

  if(mouseIsPressed){
    bob.position.set(mouseX,mouseY)
    bob.velocity.set(0,0)
  }

  /*

  //f = a
  velocity.add(force)
  velocity.add(gravity)
  bob.add(velocity)
  velocity.mult(0.99)
  */
}
