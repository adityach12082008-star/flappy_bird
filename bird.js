const r = require("raylib");

function createBird(x,screenWidth, width, height, birdVelocity, color) {
const y = screenWidth / 2;
const velocity = 0;
const started = false;

  const rec = { x, y, width, height };
 
  return { rec, color,birdVelocity,velocity,started};
}

function drawBird(bird) {
  r.DrawRectangleRec(bird.rec, bird.color);
}

function jump(bird,gravity,dt){

//  console.log(bird.velocity);
  if(r.IsKeyPressed(r.KEY_SPACE)){ bird.velocity = bird.birdVelocity;
bird.started = true;
  }

  if(bird.started){
  bird.rec.y -= bird.velocity *dt;
  bird.velocity -= gravity * dt;
  }
}

module.exports = {
  createBird,
  drawBird,
  jump
};