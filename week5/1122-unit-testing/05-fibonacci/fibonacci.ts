// Fibonacci
// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests that covers all types of input (like in the previous workshop exercise)

export function fibonacci(n:number): number {
  if (n <= 0) {
    return 0 ;
  } else if (n === 1){
    return 1;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

//console.log(fibonacci(8));