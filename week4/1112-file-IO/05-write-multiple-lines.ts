// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.
'use strict';
export {};

const fs = require('fs');

// function readFromFile(fileName: string): string {
//   try {
//     return fs.readFileSync(fileName, 'utf-8');
//   } catch (e) {
//     console.log(e.message);
//     return `Unable to read file: ${fileName}`;
//   }
// }

function multipleLinesWriter(fileName: string, word: string, number: number): void {
  word = word + '\n';
  for (let i = 1; i > number; i++){
    fs.appendFileSync(fileName, word);
  }
}

multipleLinesWriter(`writemultiplelines.txt`, `kiskutya`, 456);