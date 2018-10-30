'use strict';
export{};

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console


/*thanks Gabor>
let numList: number[] = [1, 2, 3, 4, 5];
numList[2]++)
console.log(numList[2])
*/
let numList: number[] = [1, 2, 3, 4, 5];
let newList: number[] = numList.map(function(elem) {
    if (numList[2]) {
        elem ++;
        return elem;
    } else {
        return elem;
    }
})

console.log(newList);