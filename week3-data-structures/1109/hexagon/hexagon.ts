'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size = 50;
let radius = size * Math.sqrt(3) / 2;

function hexagon(x: number, y: number): void {
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
  console.log(x + size * Math.cos(0), y + size * Math.sin(0));
  for (let side = 0; side < 7; side++) {
    let lineX = x + size * Math.cos(side * 2 * Math.PI / 6);
    let lineY = y + size * Math.sin(side * 2 * Math.PI / 6);
    ctx.lineTo(lineX, lineY);
    console.log(lineX, lineY);
  }
  ctx.stroke();
}

hexagon(canvas.width / 2, canvas.height / 2);
hexagon(canvas.width / 2, canvas.height / 2 - radius * 2);






/*ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 0, 0,false);
ctx.stroke()
*/
/*for(let i=0;i<4;i++)
{
  let lineX = x + size * Math.cos(side * 2 * Math.PI / 6);
  console.log(i*6);
}*/

// const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d');

// function hexagon(x: number, y: number): void {
//   let size = 50;
//   ctx.beginPath();
//   ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
//   for (let side = 0; side < 7; side++) {
//     let lineX = x + size * Math.cos(side * 2 * Math.PI / 6);
//     let lineY = y + size * Math.sin(side * 2 * Math.PI / 6);
//     ctx.lineTo(lineX, lineY);
//     console.log(lineX, lineY);
//   }
//   ctx.stroke();
// }

// hexagon(canvas.width / 2, canvas.height / 2);
// for (let i = 0; i < 4; i++) {
//   console.log(i * 6);
// }