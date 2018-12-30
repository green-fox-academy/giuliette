'use strict';

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function numsCheck(list: number []) {
  let numbersToBeChecked: number[] = [4, 8, 12, 16 ]
  if (numbersToBeChecked.every(e => list.indexOf(e) > -1)) {
   return true
 } else {
   return false
 }
}
console.log(numsCheck(listOfNumbers));

export = numsCheck;