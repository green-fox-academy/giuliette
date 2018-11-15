`use strict`
export { };

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function specialBunnyCounter(num: number): number {
  if (num <= 0) {
    return 0;
  } else if (num % 2 === 0) {
    return (specialBunnyCounter(num - 1) + 3);
  } else {
    return (specialBunnyCounter(num - 1) + 2);
  }
}

console.log(specialBunnyCounter(5));