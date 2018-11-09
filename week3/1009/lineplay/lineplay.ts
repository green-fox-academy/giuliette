'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


for (let i = 10; i < 600; i += 10) {
  let x = i;
  let y = 400 - x;
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(400, x);
  ctx.stroke();
}
for (let i = 10; i < 600; i += 10) {
  let x = 400 - i;
  let y = i;
  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(0, x);
  ctx.lineTo(x, 400);
  ctx.stroke();
}

/*
function lineCreator(xfrom, yto) {
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(xfrom, 0);
  ctx.lineTo(0, yto);
  ctx.stroke();
}
*/