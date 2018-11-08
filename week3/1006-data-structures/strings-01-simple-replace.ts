'use strict';
export { };

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
let exampleNew = example.replace(`dishwasher`, `galaxy`); 

console.log(exampleNew);

export = example;

