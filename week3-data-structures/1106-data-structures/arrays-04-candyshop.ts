'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

//1 /croissant 3icecream
// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(array:any[]):string[] {
  array.map((e, i) => {
    if (e === 2) {
      array[i] = "Croissant";
    } else if (e === false) {
      array[i] = "Ice cream";
    }
  });
  return array;
}

console.log(sweets(shopItems));

export = sweets;