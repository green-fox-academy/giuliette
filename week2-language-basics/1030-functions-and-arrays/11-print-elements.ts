'use strict';
export{};

// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

let integers = [4, 5, 6, 7];

// for (let entry of integers) {
//     console.log(entry)
// };

integers.forEach(element => {
  console.log(element);
});