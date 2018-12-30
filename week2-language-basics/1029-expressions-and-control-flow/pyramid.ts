'use strict';
export { };

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let pyramidBase: number = (lineCount * 2) - 1;

for (let i: number = 1; i <= pyramidBase; i = i + 2) {

  let row: string = "";

  for (let spaces: number = 0; spaces <= (pyramidBase - i) / 2; spaces++) {
    row += " ";
  }

  for (let stars: number = 0; stars < i; stars++) {
    row += "*";
  }

  for (let spaces: number = 0; spaces <= (pyramidBase - i) / 2; spaces++) {
    row = row + " ";
  }

  console.log(row);
}