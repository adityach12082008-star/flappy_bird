const r = require("raylib");

function createBird(x,screenWidth, width, height, birdVelocity, color) {
  const y = screenWidth / 2;
  const velocity = 0;
  const isStarted = false;

  const rec = { x, y, width, height };
 
  return { rec, color,birdVelocity,velocity,isStarted};
}

function drawBird(bird) {
  r.DrawRectangleRec(bird.rec, bird.color);
}

function jump(bird,gravity,dt){

  if(r.IsKeyPressed(r.KEY_SPACE)){ 
    bird.velocity = bird.birdVelocity;  
    bird.isStarted = true;
  }

  if(bird.isStarted){
  bird.rec.y -= bird.velocity *dt;
  bird.velocity -= gravity * dt;
  }
}

module.exports = {
  createBird,
  drawBird,
  jump
};
