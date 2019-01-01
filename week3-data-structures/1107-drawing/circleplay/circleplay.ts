'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    ctx.strokeStyle = `rgb(0,${Math.floor(255 - 42.5 * i)},${Math.floor(255 - 42.5 * j)})`;
    ctx.beginPath();
    ctx.arc(25 + j * 50, 25 + i * 50, 25, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}
