import { write } from "fs";

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

let fs = require('fs');


function writeToMyFile(fileName: string, data: string): void {
  if (fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, data);
    console.log('kiskutya');
  } else {
    console.log(`Unable to write file: ${fileName}`);
  }
}

writeToMyFile('valamike.txt', 'Julika')