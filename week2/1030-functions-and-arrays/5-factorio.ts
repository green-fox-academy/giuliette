'use strict';
export { };

// -  Create a function called `factorio`
//    that returns it's input's factorial
function factorial(x: number): number {
    let sum: number = 1;
    for (let a: number = 1; a <= x; a++) {
        sum *= a;

    }
    return sum;
}
console.log(factorial(5));

/* possible other solution: 
'use strict';
export{};


function factorio(num: number){
    if(num == 1){
        return 1;
    } else{
        return num * (factorio(num-1));
    }
} 

console.log(factorio(5));
*/
