import {Palindrome} from './palindrome'
import test from 'tape';

test('is palindrome', t => {
  let actual = new Palindrome('bab');
  let expected = true;
  t.equal(actual, expected);
  t.end();
})