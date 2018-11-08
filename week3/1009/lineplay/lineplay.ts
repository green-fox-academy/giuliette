'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineCreator(xfrom, yfrom) {
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(xfrom, yfrom);
  ctx.lineTo(0, 0);
  ctx.stroke();
}


for (let i = 0; i <= canvas.width; i += 20) {
  for (let j = 0; j <= canvas.height; j += 20) {
    if (j === 0 || i === 0 || i === canvas.width || j === canvas.height) {
      lineCreator(i, j);
    }
  }
}