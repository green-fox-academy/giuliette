'use strict';
export { };

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList: number[] = [1, 2, 3, 4, 5];
let newList: number[] = numList.map(function (element) {
    if (numList[2]) {
        element++;
        return element;
    } else {
        return element;
    }
})

console.log(newList[2]);