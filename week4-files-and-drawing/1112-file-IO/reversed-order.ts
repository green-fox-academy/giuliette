// Create a method that decrypts reversed-order.txt

let fs = require('fs');

 function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e.message);
    return `Unable to read file: ${fileName}`;
  }
}

function reverse (fileName):string {
  let unOrdered: string[] = readFromFile(fileName).split('\n');
  let ordered: string[] = [];

  unOrdered.forEach(element => {
    ordered.push(element);
  });
  return ordered.reverse().join('\n');
}

console.log(reverse('reversed-order.txt'));

