'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
 // x:600 y 400

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo (590, 10);
ctx.stroke();

ctx.strokeStyle = 'purple';
ctx.beginPath();
ctx.moveTo(590, 10);
ctx.lineTo (590, 390);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(590, 390);
ctx.lineTo (10, 390);
ctx.stroke();

ctx.strokeStyle = 'magenta';
ctx.beginPath();
ctx.moveTo(10, 390);
ctx.lineTo (10, 10);
ctx.stroke();