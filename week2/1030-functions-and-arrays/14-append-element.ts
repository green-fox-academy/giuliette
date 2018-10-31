'use strict';
export { };

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let allatkak: string[] = ["koal", "pand", "zebr"];

allatkak.forEach(function (element, index, array) {
  array[index] += "a";
}
);
