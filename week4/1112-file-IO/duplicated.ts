// Create a method that decrypts duplicated-chars.txt
let fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e.message);
    return 'Unable to read file: myfile.txt';
  }
}

function duplicatedEncryption(fileName) {
  let crypted: any[] = readFromFile(fileName).split('');
  let decrypted: string[] = [];

  crypted.forEach((element, i) => {
    if (element % 2 !== 0) { 
      decrypted.push(element);
    }
  });
  return decrypted;
}

console.log(duplicatedEncryption('duplicated.txt'));

// for EACH 
  //  crypted.forEach(function(e, i, a){
  //    if (i %2 !==0){
  //      decrypted.push(e);
  //    }
  //  })
  //  return decrypted.join('');