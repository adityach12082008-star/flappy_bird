const r = require("raylib");
const b = require("./bird.js");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  const screen = {
    WIDTH: 800,
    HEIGHT: 800,
    FPS: 60,
    targetFPS: 60,
  };

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.WIDTH, screen.HEIGHT, "DINO");
  r.SetTargetFPS(screen.FPS);

  const birdVelocity =9*screen.targetFPS;
  const obstVel = 3 * screen.targetFPS;
  const gravity = 0.6 * screen.targetFPS * screen.targetFPS;

 

  const bird = b.createBird(100,screen.WIDTH, 32, 48, birdVelocity, r.BLUE);

  return { bird,gravity };
}

function update(w) {
  const dt = r.GetFrameTime();
 b.jump(w.bird,w.gravity,dt);
}

function draw(w) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
 
  b.drawBird(w.bird)

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};