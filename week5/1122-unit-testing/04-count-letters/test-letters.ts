'use strict'
import test from 'tape';
import { countLetters } from './count-letters';

test('see occurences', t => {
  let actual = countLetters('hellooooooooo')['o'];
  let expected = 9;
  t.equal(actual, expected);
  t.end();
})

import { test } from 'tape';
import { countLetters } from "./countletters";
let theString = "alma";
let theBela = "Bélabá";
let theClass = "really class javascript";

test('test countletters', t => {
    let actual = countLetters(theString);
    let expected = { alma: { a: 2, l: 1, m: 1 } };
    t.deepEqual(actual, expected);
    t.end();
});
test('test countletters for a string containing words', t => {
    let actual = countLetters(theClass);
    let expected = { really: { r: 1, e: 1, a: 1, l: 2, y: 1 }, class: { c: 1, l: 1, a: 1, s: 2 }, javascript: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 } };
    t.deepEqual(actual, expected);
    t.end();
});

test('test countletters with a string containing capital letters', t => {
    let actual = countLetters(theBela);
    let expected = { 'Bélabá': { B: 1, 'é': 1, l: 1, a: 1, b: 1, 'á': 1 } };
    t.deepEqual(actual, expected);
    t.end();
})