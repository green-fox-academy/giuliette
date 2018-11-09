'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawTriangle(x: number, y: number):void {
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(x, y); //x,y
  ctx.lineTo(x + 50, y); //x+50,y
  ctx.lineTo(x + 25, y - 50); //x*1.5, y-50
  ctx.lineTo(x, y); //x, y
  ctx.stroke();
}

for (let i = 0; i < canvas.width; i += 50) {
  for (let j = 0; j < canvas.height; j += 50) {
    drawTriangle(i, j);
  }
}