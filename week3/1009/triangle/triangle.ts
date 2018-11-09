'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(100,50);
ctx.lineTo(150,50);
ctx.lineTo(125,0);
ctx.lineTo(100,50);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(150,50);
ctx.lineTo(200,50);
ctx.lineTo(175,0);
ctx.lineTo(150,50);
ctx.stroke();

//function drawOneTriangle(x: number){}
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(50,50); //x,y
ctx.lineTo(100,50); //x+50,y
ctx.lineTo(75,0); //x*1.5, y-50
ctx.lineTo(50,50); //x, y
ctx.stroke();