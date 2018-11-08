'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  * The background should be black 
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function clearSky() {
  let color = getRandomNum(0, 255);
  let x = getRandomNum(0, 600);
  let y = getRandomNum(0, 400);
  ctx.fillStyle = `rgb(${color},${color},${color})`;
  ctx.fillRect(x, y, 3, 3);
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < canvas.width; i ++) {
  clearSky() 
}
