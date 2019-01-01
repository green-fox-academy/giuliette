import test from 'tape';
import { fibonacci } from './fibonacci';

//sequence: 0,1,1,2,3,5,8,13,21
test('is fibonacci number', t => {
  let actual = fibonacci(4);
  let expected = 2;

  t.equal(actual, expected);
  t.end();
});

test('isn\'t fibonacci number', t => {
  let actual = fibonacci(4.5);
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});