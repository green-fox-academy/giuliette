'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let start: number = 10;
let addstart: number = 5;

let x: number = 10;
let y: number = 10;

for (let i: number = 0; i < 6; i++) {
  ctx.fillStyle = "purple";
  ctx.fillRect(x, y, start, start);
  x += start;
  y += start;
  start += addstart;
}
