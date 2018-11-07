export { };
'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls: string[], boys: string[]): string {
  let length = Math.min(girls.length, boys.length);
  let pairs = [];
  for (var i = 0; i < length; i++) {
    pairs[ i * 2 ] = girls[i];
    pairs[ i * 2 + 1] = boys[i];
  } 
  return pairs;
}

console.log(makingMatches(girls, boys));

export = makingMatches;

//ujra>
/*
let matches = new Array(girls, boys);
for (let i = 0; i < matches.length; i++) {
  console.log(girls[i] + boys[i]);

}*/

/*function legalAgeDates(arr1: string[], arr2: string[]: string[]) {
  let pairs: string[] = [];
  for () {
    if(){}
  }
}
*/