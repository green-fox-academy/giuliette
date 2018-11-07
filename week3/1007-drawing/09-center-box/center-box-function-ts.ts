'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function threeSquares(size) {
  ctx.strokeStyle = "orange";
  ctx.strokeRect(300+size, 200+size, size, size);
}

for (let i = 1; i < 4; i++) {
  threeSquares(i*20);
}