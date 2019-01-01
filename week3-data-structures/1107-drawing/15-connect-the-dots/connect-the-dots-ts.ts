'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

function line(x: number, y: number, x1: number, y1: number) {
  console.log(x, y, x1, y1);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = '#28A828';
  ctx.stroke();
}

function draw(points: number[][]) {
  for (let i = 0; i < points.length - 1; i++) {
    line(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1]);
  }
}

draw(box);
draw(shape);

