const myObj: any = {};
myObj.str = 'myString';
myObj.number = 42;
myObj.array = [1, 2];

console.log('Expected myString :::', myObj.str);

console.log('Expected 42 :::', myObj['number']);

const example = 'array';
console.log('Expected [ 1, 2 ] :::', myObj[example]);

console.log('Expected undefined :::', myObj['']);

console.log('\nUsing [] property accessor to dynamically get data from an object');

const propertyNames = ['a', 'b', 'c'];

const object = { a: 'First property', b: 'Second property', c: 'Third property' };

propertyNames.forEach((propertyName: string) => {
  console.log(object[propertyName]);
});
