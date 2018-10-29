
'use strict';
export{};
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let lineCount: number = 4;
let star: string = " "

for (let j: number = 0; j < lineCount; j++){
    star += "*";
    console.log(star);
}
