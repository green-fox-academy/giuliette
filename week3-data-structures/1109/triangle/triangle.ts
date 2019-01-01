'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let side = 100;
let triangleHeight = side + 0;

function drawTriangle(x: number, y: number): void {
  ctx.beginPath();
  ctx.moveTo(x, y + side);
  ctx.lineTo(x + side, y + side);
  ctx.lineTo(x + side / 2, y)
  ctx.lineTo(x, y + side);
  ctx.stroke();
}

/*for (let i = 0; i < canvas.width / 2; i++) {
  for (let j = i; j < canvas.height / triangleHeight; j++) {
    drawTriangle(i * side-(j*side/2), j * side)
  }
}*/

for (let i = 0; i < canvas.width / 2; i++) {
  for (let j = i; j < canvas.height / triangleHeight; j++) {
    //drawTriangle(i * side, j * side)
    //drawTriangle(i * side-(j*side/2)+side*3.5, j * side) //50
    drawTriangle(i * side - (j * side / 2) + side * 1.5, j * side)
  }
}

