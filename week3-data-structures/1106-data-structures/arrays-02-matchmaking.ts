export { };
'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(arr1: string[], arr2: string[]): string[] {
  let pairs: string[] = [];
  for (let i:number = 0; i < arr2.length; i++) {
    if (arr1[i]) {
      pairs.push(girls[i]);
    }
    pairs.push(boys[i]);
  }
  return pairs;
}

console.log(makingMatches(girls, boys));

export = makingMatches;