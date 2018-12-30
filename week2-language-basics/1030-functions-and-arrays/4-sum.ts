'use strict';
export { };

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(asdf: number) {
    let sumNumbers: number = 0;
    for (let n: number = 0; n <= asdf; n++) {
        sumNumbers += n;
    }
    return sumNumbers;
}

console.log(sum(6));