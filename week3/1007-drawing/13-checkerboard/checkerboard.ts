'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

// if - === fill, 
// for loop 

function checkerboard(x, y) {

  ctx.strokeStyle = 'black';

  ctx.fillRect(x, y, 40, 40);

}

for (let i = 0; i < canvas.width; i++) {
  for (let j = 0; j < canvas.height; j++) {
    if ((i + j) % 2 === 0){
      checkerboard(40 * i, 40 * j);
    }
  } 
}



