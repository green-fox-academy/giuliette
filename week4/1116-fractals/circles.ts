'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'grey';
//void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
let color = `rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")`;

function drawCircle(x: number, y: number, size: number, i: number): void {
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, Math.PI * 2);
  ctx.stroke();

  if (i > 1) {
    drawCircle(x - size / 4.5, y + size / 9, size / 2, i - 1);
    //drawCircle(x + size / 4.5, y + size / 9, size / 2, i - 1);
    //drawCircle(x, y - size / 4, size / 2, i - 1);     
  } 
}

drawCircle(300, 300, 600, 6);