'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


for (let i: number = 20; i < 600; i += 20) {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(400, i);
  ctx.stroke();
}

for (let i: number = 20; i < 600; i += 20) {
  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(0, 400 - i);
  ctx.lineTo(400 - i, 400);
  ctx.stroke();
}
