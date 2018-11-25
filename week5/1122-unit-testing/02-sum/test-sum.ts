import  test  from 'tape';
import { Sum } from './sum';

test('add 3 numbers', t => {
  const summing = new Sum();
  let listForTesting = [1, 2, 3];

  var actual = summing.addNum(listForTesting);
  var expected = 6;
  
  t.equal(actual, expected);
  t.end();
});

test('equal to empty list', t => {
  const summing = new Sum();
  let listForTesting = [];

  var actual = summing.addNum(listForTesting);
  var expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('equal to one-element list', t => {
  const summing = new Sum();
  let listForTesting = [1];

  var actual = summing.addNum(listForTesting);
  var expected = 1;

  t.equal(actual, expected);
  t.end();
});

test('equal to sum of multiple elements', t => {
  const summing = new Sum();
  let listForTesting = [10, 10, 19, 21];

  var actual = summing.addNum(listForTesting);
  var expected = 60;

  t.equal(actual, expected);
  t.end();
});

test('equals null', t => {
  const summing = new Sum();
  let listForTesting = [null];

  var actual = summing.addNum(listForTesting);
  var expected = null;

  t.notEqual(actual, expected);
  t.end();
});

test('equals a string', t => {
  const summing = new Sum();
  let listForTesting:any[] = ["string"];

  var actual = summing.addNum(listForTesting);
  var expected = NaN;

  t.notEqual(actual, expected);
  t.end();
});