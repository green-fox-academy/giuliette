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
  var actual = anagram('Béla kék az ég', 'doog');
  var expected = true;
  t.ok(anagram(actual, expected);
  t.end();
});

test('with spaces', t =>{
  t.ok(anagram('good', 'doog'));
  t.end();
});