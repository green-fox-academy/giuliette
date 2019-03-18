const fs = require('fs')

export function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    console.log(e.message);
    return null;
  }
}

export function writeToFile(fileName: string, content: string): void {
  if(fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, content);
  } else {
    console.log(`Can't write to file. File doesnt exist.`);
  }
}

export function appendToFile(fileName: string, content: string): void {
  if(fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, content);
 } else {
    console.log(`Can't write to file. File doesnt exist.`);
  }
}
"use strict";
import test from 'tape';

test("testName", (t) => {

  let actual = "actualValue";
  let expected = "expectedValue";

  t.equal(actual, expected);
  t.end();
})