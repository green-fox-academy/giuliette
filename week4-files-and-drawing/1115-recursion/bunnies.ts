`use strict`
export { };

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyCounter(num: number): number {
  if (num <= 0) {
    return 0;
  } else {
    //console.log(num);
    return(bunnyCounter(num-1)+2);
  }
}

console.log(bunnyCounter(5));