'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];
//1 /croissant 3icecream
// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets (list:any[]){
  list.splice(0, 4, 'cupcake', 'croissant', 'brownie', 'icecream');
  return list;
}

console.log(sweets(shopItems));

export = sweets;

