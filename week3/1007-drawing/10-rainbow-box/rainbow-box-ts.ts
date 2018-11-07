'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

//function (size, fillcolor) {}

function squareDrawing(size, fillcolor) {
  let x = (canvas.width - size) / 2;
  let y = (canvas.height - size) / 2;
  ctx.fillStyle = fillcolor;
  ctx.fillRect(x, y, size, size);
}

let fillcolor = ['aquamarine', 'blue', 'purple', 'red', 'orange', 'yellow'];

for (let i = 6; i > 0; i--) {
  let square = (canvas.height / 6 * i);
  squareDrawing(square, fillcolor[6 - i]);
}