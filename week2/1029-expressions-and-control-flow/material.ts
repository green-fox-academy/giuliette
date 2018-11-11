'use strict';
export{};
/*
//Creating different variables for each type
// String
let welcome: string = 'Hello, World';
console.log(welcome);

// Boolean
let isAwesome: boolean = true;
console.log(isAwesome);

// Integer
let theMeaningOfLifeAndTheUniverseAndEverything: number = 42;
console.log("theMeaningOfLifeAndTheUniverseAndEverything is: " +theMeaningOfLifeAndTheUniverseAndEverything);

// Floating point number
let pi: number = 3.141592;
console.log(pi);

// Assigning and creating a variable, (define its value)
let number: number = 12;

// Mutate a variable, (redefine its value)
number = 23;

// Any
let dynamic: any = 5;
dynamic = true;
dynamic = 'strange';

//   Arithmetic Assignment Operators
let a: number = 12;
a = a + 4;
console.log(a); // Prints 16

let b: number = 12;
b = b - 4;
console.log(b); // Prints 8

let c: number = 12;
c *= 3;
console.log(c); // Prints 36

let d: number = 12;
d /= 3;
console.log(d); // Prints 4

let e: number = 12;
e %= 7;
console.log(e); // Prints 5

let f: number = 12;
f++;
console.log(f); // Prints 13

let g: number = 12;
g--;
console.log(g); // Prints 11

let h: number = 10;
console.log(h); // Prints 10
console.log(h++); // Prints 10
console.log(h); // Prints 11

let i: number = 10;
console.log(i); // Prints 10
console.log(++i); // Prints 11
console.log(i); // Prints 11
*/

//nothings
undefined;
null;
NaN;

null !== undefined;
NaN !== undefined;
null !== NaN;

null == undefined;

typeof undefined; // 'undefined'
typeof null; // 'object'
typeof NaN; // 'number'

let apple;
console.log(apple); // undefined
console.log(apple + 1); // NaN
apple = null;
console.log(apple); // null

//Conditionals
let a2: number = 13;

if (a2 === 13) {
  console.log('Yaaay! The value of the \'a\' variable is 13'); // This block will run
}

if (a2 === 8) {
  console.log('Yaaay! The value of the \'a\' variable is 8'); // This block will NOT run
}


let b2: number = 20;

if (b2 < 10) {
  console.log('Yaaay! The value of the \'b\' variable is lower than 10') // This block will NOT run
} else {
  console.log('Yaaay! The value of the \'b\' variable is higher than 10') // This block will run
}


let c2: number = 15;

if (c2 < 10) {
  console.log('Yaaay! The value of the \'b\' variable is lower than 10'); // This block will NOT run
} else if (c2 < 20) {
  console.log('Yaaay! The value of the \'b\' variable is higher than 10'); // This block will run
} else {
  console.log('Yaaay! The value of the \'b\' variable is higher than 10'); // This block will NOT run
}


let thirsty: boolean = true;
let hungry: boolean = false;

if (thirsty && hungry) {
  console.log('Lunch time!');
} else if (thirsty || hungry) {
  console.log('Snack time!');
} else {
  console.log('No food for you.');
}

// loops
let a: number = 0;
while (a < 10) {
  console.log(a); // Prints the numbers from 0 to 9
  a++;
}

for (let j: number = 0; j < 100; j++) {
  console.log(j); // Prints the numbers from 0 to 99
}