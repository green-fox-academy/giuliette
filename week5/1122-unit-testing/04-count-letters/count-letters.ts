'use strict';
// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

export function countLetters(string: string):any {
  let barmi: string[] = string.split(''), objectSajat = {};
  barmi.join('').split('').forEach(e => objectSajat[e] = (objectSajat[e] || 0)+1);
  return objectSajat;
}

console.log(countLetters('hellooooooooo'));