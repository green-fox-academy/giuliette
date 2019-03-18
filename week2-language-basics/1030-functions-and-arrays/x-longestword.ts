function findlongest (exampleString) {
  let myString = exampleString.split(' ').reverse().join('.');

  console.log(myString)
}

findlongest('the quick brown fox jumps over the brown thing');
