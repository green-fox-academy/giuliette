// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

export { }
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function countLines(fileName: string): number {
  let countLines: number = 0;
  const myFile = readFromFile(fileName);

  if (myFile !== null) {
    countLines += myFile.split('\n').length;
    return countLines;
  } else return countLines;
}

console.log(countLines('my-fle.txt'));

/*
function countLines(fileName: string): number {
  let countLines: number = 0;
  try {
    const myFile: string = fs.readFileSync(fileName, 'utf-8');
    countLines += myFile.split('\n').length;
    return countLines;
  }
  catch (e) {
    return countLines;
  }
}

console.log(countLines('my-fle.txt'));
*/

//exist.sync

/*
fs.readFileSync('my-file.txt').split('\n').forEach(function(line, index, arr) {
  if (index === arr.length - 1 && line === "") { return; }
  console.log(index + " " + line);
});
*/


// function readFromFile(fileName: string): any {
//   try {
//     fileName.split('\n');
//     return fs.readFileSync('my-file.txt', 'utf-8');
//   } catch (e) {
//     return null;
//   }
// }
// console.log(readFromFile)

//function lineCount(fileName: string): any {}

/* var path = process.argv[2];
var text = fs.readFileSync(path).toString();
var lines = text.split('\n');
var newlines_count = lines.length - 1;
console.log(newlines_count);
 */
/* 
const countLinesInFile = require('count-lines-in-file');
const path = require('path');
const targetFilePath = path.resolve(__dirname, './data.txt');
 
countLinesInFile(targetFilePath, (error: Error, numberOfLines: number) => {
 
}); */

/*
const countLines = function(fileName:string):number {
  let i;
  let count = 0;
  fs.createReadStream(filePath)
      .on('data', chunk => {
          for (i=0; i < chunk.length; ++i) if (chunk[i] == 10) count++;
      })
      data.toString().split("\n").forEach(function(line, index, arr) {
        if (index === arr.length - 1 && line === "") { return; }
        console.log(index + " " + line);
};

return countLines('my-file.txt');
*/