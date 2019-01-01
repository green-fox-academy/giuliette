'use strict'
import  test  from 'tape';
import { Apple } from './apples';

test('check string', t => {
  const golden = new Apple();

  let actual = golden.getApple();
  let expected = 'apple';

  t.equal(actual, expected);
  t.end();
});