'use strict';
export{};

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let space: string = ' ';
let stars: string = '*'

for (let rowNum: number= 0; rowNum < lineCount; rowNum++) {
    if (rowNum < lineCount / 2) {
        let starsCount: number = 1 + rowNum * 2;
        let spaceCount: number = (lineCount - starsCount) / 2 ;
        console.log(space.repeat(spaceCount) + stars.repeat(starsCount));
    } else {
        let starsCount: number = lineCount - (2 * (rowNum - ((lineCount - 1) / 2)));
        let spaceCount: number = (lineCount - starsCount) / 2;
        console.log(space.repeat(spaceCount) + stars.repeat(starsCount));
    }
}
