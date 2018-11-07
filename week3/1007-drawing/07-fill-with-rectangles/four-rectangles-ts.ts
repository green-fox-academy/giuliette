'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function rectangles (blue, x, y) {
  ctx.strokeStyle = `rgb(0, 0, ${blue} )`;
  ctx.fillRect(x, y, 100, 100);
}

for (let i = 0; i < 4; i++){
  rectangles(i * 90, i * 20, i * 20);
}