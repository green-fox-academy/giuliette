'use strict'

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList: number[] = [3, 4, 5, 6, 7];

// for (let i = numList.length; i >= 0; i--) {
//   let reversed: number[] = [];
//   reversed.push(numList[i]);
//   console.log(reversed);
// }

numList.reverse();
console.log(numList);

let numListA: number[] = [3, 4, 5, 6, 7];
let temp: number[] = [];

for (let i = numListA.length; i > 0; i--){
    temp.push(numListA[i]);
}

console.log(temp);