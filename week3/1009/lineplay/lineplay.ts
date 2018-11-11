'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


for (let i = 20; i < 600; i += 20) {
  let x = i;
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(400, x);
  ctx.stroke();
}

for (let i = 20; i < 600; i += 20) {
  let x = 400 - i;
  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(0, x);
  ctx.lineTo(x, 400);
  ctx.stroke();
}
