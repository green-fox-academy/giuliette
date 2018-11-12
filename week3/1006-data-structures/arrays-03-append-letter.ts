'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
function appendA(arr){
  for (let a = 0; a < 5; a++){
    let plusLetter = 'a';
    arr[a] += plusLetter;
  }
}
console.log(appendA(far));
// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
export = appendA;
