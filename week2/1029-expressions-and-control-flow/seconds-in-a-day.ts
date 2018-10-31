'use strict';
export { };

let currentHours: number = 14;
  let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

/*first attempt
console.log((24 - currentHours) * 60 * 60 + (60 - currentMinutes) * 60 + 60 - currentSeconds);
*/
/*second:
console.log((((24 - currentHours + 1) * 60 * 60) - (60 - 34)) * 60 + (60 - currentMinutes + 1) * 60 + (60 - 42) * 60 + (60 - currentSeconds));
*/
console.log((24 - currentHours) * 60 * 60 + (60 - currentMinutes) * 60 + 60 - currentSeconds);