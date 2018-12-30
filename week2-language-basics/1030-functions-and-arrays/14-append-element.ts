'use strict';
export { };

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];

animals.forEach(function (element, index, array) {
  array[index] += "a";
});

console.log(animals);