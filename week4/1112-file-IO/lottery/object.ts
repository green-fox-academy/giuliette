var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); 

Object.getOwnPropertyNames(obj).forEach(
  function (val, idx, array) {
    console.log(val + ' -> ' + obj[val]);
  }
);