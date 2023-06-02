const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// canvas size
canvas.width = 1300;
const CANVAS_W = canvas.width;
canvas.height = 500;
const CANVAS_H = canvas.height;

// mack images
let mackPosition = -300;
let mackIdle = "mack/idle.png";
let mackIdleImgWidth = 1400;
let mackAttack1 = "mack/Attack1.png";
let mackAttack2 = "mack/Attack2.png";
let mackTakeHit = "mack/Take Hit.png";
let mackDeath = "mack/Death.png";
const playerOneImg = new Image();
playerOneImg.src = mackIdle;

// canvas image
const spriteWidth = 200;
const spriteHeight = 200;

// animations settings
let mackFrameX = 200;
let mackFrames = 0;
let mackPositionXFrame = 0;
const mackIdleFrames = 5;
const mackAttackFrames = 10;

// character animation
function animateMackIdle() {
  // character position
  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
  ctx.drawImage(
    playerOneImg,
    mackFrameX + mackPositionXFrame,
    0,
    spriteWidth,
    spriteHeight,
    mackPosition,
    13,
    spriteWidth * 4,
    spriteHeight * 4
  );
  // character Movements
  function mooveMack() {
    if (mackFrames % mackIdleFrames === 0) {
      if (mackFrameX < mackIdleImgWidth) {
        mackFrameX += 200;
      } else {
        mackFrameX = 0;
      }
    }
  }
  function startMooveMack() {
    if (ch == true) {
      if (mackPosition < 150) {
        mackPosition += 6;
      }
    }
  }

  mackFrames++;
  requestAnimationFrame(animateMackIdle);
  mooveMack();
  startMooveMack();
}
animateMackIdle();

// character 22222222222222222222222222222222222

// kenjis images
let kenjiPosition = 800;
let kenjiIdle = "kenji/idle.png";
let kenjiIdleImgWidth = 600;
let kenjiAttack1 = "kenji/Attack1.png";
let kenjiAttack2 = "kenji/Attack2.png";
let kenjkiTakeHit = "kenji/Take hit.png"
let kenjiDeath = "kenji/Death.png"
const playerTwoImg = new Image();
playerTwoImg.src = kenjiIdle;

// kenji animations
const kenjiIdleFrames = 5;
const kenjiAttackFrames = 10;
let kenjiFrames = 0;
let kenjiFrameX = 200;

// kenji animation
function animateKenji() {
  // character position

  ctx.clearRect(1000, 0, CANVAS_W, CANVAS_H);
  ctx.drawImage(
    playerTwoImg,
    kenjiFrameX + 0,
    0,
    spriteWidth,
    spriteHeight,
    kenjiPosition,
    -13,
    spriteWidth * 4,
    spriteHeight * 4
  );
  // character Movements
  function mooveKenji() {
    if (kenjiFrames % kenjiIdleFrames === 0) {
      if (kenjiFrameX < kenjiIdleImgWidth) {
        kenjiFrameX += 200;
      } else {
        kenjiFrameX = 0;
      }
    }
  }
  function startMoovekenji() {
    if (ch == true) {
      if (kenjiPosition > 350) {
        kenjiPosition -= 6;
      }
    }
  }

  kenjiFrames++;
  requestAnimationFrame(animateKenji);
  mooveKenji();
  startMoovekenji();
}
animateKenji();
