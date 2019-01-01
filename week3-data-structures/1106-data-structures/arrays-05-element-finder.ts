'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

const numbers: number[] = [7, 2, 3, 4, 5, 6, 7];

numbers.forEach(element => {
  if (element == 7){
    console.log('hoorray');
  } else {
    console.log('nay');
  }
});