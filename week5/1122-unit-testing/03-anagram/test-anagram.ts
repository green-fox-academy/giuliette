'use strict'

import test from 'tape';
import { anagram } from './anagram';

test('is anagram', t =>{
  var actual = anagram('good', 'doog');
  var expected = true;
  t.equal(actual, expected);
  t.end();
});

test('is anagram2', t =>{
  t.ok(anagram('good', 'doog'));
  t.end();
});