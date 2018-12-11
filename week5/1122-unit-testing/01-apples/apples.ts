// Create an object, with one method (eg. getApple()) that returns a string (eg. 'apple')
// Create a test for that:
// Create a test method
// Instantiate an Object from your class in the method
// Use the t.equal()
// The expected parameter should be the same string (eg. 'apple')
// The actual parameter should be the return value of the method (eg. myobject.getApple())
// Run the test
// Change the expected value to make the test failing
// Run the test
// Fix the returned value to make the test succeeding 

export class Apple {
  getApple(): string {
    return 'apple';
  }
}

let goldenApple = new Apple();

console.log(goldenApple.getApple());