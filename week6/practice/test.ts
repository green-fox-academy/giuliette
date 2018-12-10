'use strict';
import test from 'tape';
import {Car} from './car';
import { CarPark } from './carpark';

let car = new Car(1, 'bbb-45', 43);
console.log(car);

test('adding car to carpark', (t) => {
  let myCar = new Car(1,'FUN-432',2012);
  let legelo = new CarPark;
  legelo.addCar(myCar);

  let testArray = [];

  testArray.push(myCar);

  t.deepEqual(legelo.cars, testArray);
  t.end();
})