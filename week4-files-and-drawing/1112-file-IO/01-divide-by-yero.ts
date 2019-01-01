// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function divide(a: number, b: number): number {
  if (b === 0) {
    throw new TypeError('FAIL: Can\'t divide by zero');
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
} catch (e) {
  console.log(e.message);
} finally {
  console.log('appears at all cases');
}