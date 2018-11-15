// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(n: number): number {
  if (n > 0) {
    return Math.floor(n % 10 + sumDigits(n / 10)); 
    // 6  n % 10 
    // 3  (n / 10) % 10,  
    // 1  ((n / 10) / 10) % 10
  }
  return 0;
}

console.log(sumDigits(1352));



