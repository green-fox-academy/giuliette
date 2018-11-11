
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function lineDrawing (x, y){
  ctx.strokeStyle = 'orange';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();

}

for (let i = 0; i <= canvas.width; i+= 20){
  for (let j = 0; j <= canvas.height; j+= 20){
    if (j === 0 || i === 0 || i === canvas.width || j === canvas.height) {
      lineDrawing(i, j);
    }
  }
}




/*from go to center:
 

for (let i = 0; i < 3; i++){
  drawing(i * 20 + 200, 100);
}