import { reverse } from "dns";

// Create a method that decrypts reversed-lines.txt

let fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e.message);
    return `Unable to read file: ${fileName}`;
  }
}

function reverseLines(fileName) {
  let notGoodLines: string[] = readFromFile(fileName).split('\n');
  let goodLines: any[] = [];

  notGoodLines.forEach((element, i) => {
    goodLines.push(element);

  })
  return goodLines.reverse();
}

console.log(reverseLines('reversed-lines.txt'));
