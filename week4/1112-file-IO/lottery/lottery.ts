'use strict'
export {};
let fs = require ('fs');

function readFromFile(fileName: string): string {
    try {
      return fs.readFileSync(fileName, 'utf-8');
    } catch(e) {
      console.log(e.message);
      return null;
    }
  }

  function checkNumbers(fileName: string) {
    const fileContent = readFromFile(fileName);
    if (fileContent !== null) {
      let line = fileContent.split('\n');
      for (let i = 0; i < line.length; i++) {
        let lotteryNumbers: string[][] = [];
        lotteryNumbers.push(line[i].split(';').splice(-5, 5));
        console.log(lotteryNumbers);
      }
    }
  }

  checkNumbers('lottery.csv');