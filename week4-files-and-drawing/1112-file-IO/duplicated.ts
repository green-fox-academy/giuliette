// Create a method that decrypts duplicated-chars.txt
let fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e.message);
    return 'Unable to read file: myfile.txt';//null or exception!
  }
}

function duplicatedEncryption(fileName):string {
  let crypted: string[] = readFromFile(fileName).split(''); //string 
  let decrypted: string[] = [];

  crypted.forEach((element:string):any => {
    if (element % 2 !== 0) { 
      decrypted.push(element);
    }
  });
  return decrypted;
}

console.log(duplicatedEncryption('duplicated.txt'));

// forEach arrow function kibontva:
  //  crypted.forEach(function(e, i, a){
  //    if (i %2 !==0){
  //      decrypted.push(e);
  //    }
  //  })
  //  return decrypted.join('');