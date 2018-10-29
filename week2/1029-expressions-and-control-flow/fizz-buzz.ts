
'use strict';
export {};

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let n: number = 1;

while (n < 100) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("fizzbuzz");
    } else if (n % 3 === 0) {
    console.log("fizz");
    } else if (n % 5 === 0) {
    console.log("buzz");
    } else {
        console.log(n);
    }
    n++;
}
