'use strict'
import test from 'tape';
import { countLetters } from './count-letters';

test('see occurences', t => {
  let actual = countLetters('hellooooooooo')['o'];
  let expected = 9;
  t.equal(actual, expected);
  t.end();
})
