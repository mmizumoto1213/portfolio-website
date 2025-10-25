const character = document.getElementById("character");
const box = document.getElementById("game-box");

const step = 4; // Movement speed (pixels per key press)

// Starting position
let x = 0;
let y = 0;

// Box and character sizes
const boxWidth = box.clientWidth;
const boxHeight = box.clientHeight;
const charWidth = character.clientWidth;
const charHeight = character.clientHeight;

const keysPressed = {}; // Track pressed keys

document.addEventListener("keydown", (e) => {
  keysPressed[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  keysPressed[e.key] = false;
});

function moveCharacter() {
  if (keysPressed["ArrowUp"]) {
    y = Math.max(0, y - step);
  }
  if (keysPressed["ArrowDown"]) {
    y = Math.min(boxHeight - charHeight, y + step);
  }
  if (keysPressed["ArrowLeft"]) {
    x = Math.max(0, x - step);
  }
  if (keysPressed["ArrowRight"]) {
    x = Math.min(boxWidth - charWidth, x + step);
  }

  character.style.top = y + "px";
  character.style.left = x + "px";

  requestAnimationFrame(moveCharacter); // keep looping
}

// Start the animation loop
requestAnimationFrame(moveCharacter);