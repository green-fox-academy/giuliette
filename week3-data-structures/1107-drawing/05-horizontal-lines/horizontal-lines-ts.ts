'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawHorizons (x, y) {
  ctx.strokeStyle = 'aquamarine';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo (x + 50, y);
  ctx.stroke();
} 

for (let i = 0; i < 3; i++){
  drawHorizons(10, 20 * i + 10);
}