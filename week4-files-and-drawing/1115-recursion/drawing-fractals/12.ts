'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, 400, 400);

function draw(x: number, y: number, size: number, i: number): void {
  // Base horizont
  ctx.strokeRect(x, y + size / 3, size, size / 3);
  // Base vertical
  ctx.strokeRect(x + size / 3, y, size / 3, size);

  if (i > 1) {
    draw(x, y + size / 3, size / 3, i - 1); // Left
    draw(x + size / 3, y, size / 3, i - 1); // Top
    draw(x + (size * 2) / 3, y + size / 3, size / 3, i - 1); // Right
    draw(x + size / 3, y + (size * 2) / 3, size / 3, i - 1); // Bot
  }
}

draw(0, 0, 400, 5);

