import test from 'tape';
import { Sharpie } from './sharpie';

// color: string, width, inkamount 
test('color is given as string', t => {
  let actual = ('');
  let expected = ('');
  t.equal(actual, expected);
  t.end();
})

//use sharpie
test('inkamount changes when used', t => {
  let favSharpie = new Sharpie('blue');
  favSharpie.use();
  let actual = 100;
  let expected = 90;
  t.notEqual(actual, expected);
  t.end();
});