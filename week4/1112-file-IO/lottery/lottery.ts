'use strict'
export { };
let fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function checkNumbers(fileName: string) {
  const fileContent = readFromFile(fileName);
  if (fileContent !== null) {
    let line = fileContent.split('\n');
    let lotteryNumbers: string[][] = [];
    let commonNumbers = {};

    for (let i = 0; i < line.length; i++) {
      lotteryNumbers.push(line[i].split(';').splice(-5, 5));
      //console.log(lotteryNumbers);
    }

    for (let i = 0; i < lotteryNumbers.length; i++) {
      for (let j = 0; j < lotteryNumbers[i].length; j++) {
        //console.log(lotteryNumbers[i][j]);
        if (commonNumbers[lotteryNumbers[i][j]] !== undefined) { //undefined = false-nak felel meg.
          (commonNumbers[lotteryNumbers[i][j]])++;
        } else {
          (commonNumbers[lotteryNumbers[i][j]]) = 1;
        }
      }
    }
    return Object.keys(commonNumbers).sort((a, b) => commonNumbers[b] - commonNumbers[a]).slice(0, 5);
  }
}

console.log(checkNumbers('lottery.csv'));

//beolvas's, for, for eredmeny