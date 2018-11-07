'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function rectangles(x, y) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, 10, 10);
}

for (let i = 1; i < 20; i++) {
  rectangles(i * 10, i * 10);
}