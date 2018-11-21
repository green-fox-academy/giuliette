'use strict'
import { Thing } from "./thing";
import { Fleet } from "./fleet";

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let fleet = [];

let thing1 = new Thing('Get milk');
let thing2 = new Thing('remove the obstacles');
let thing3 = new Thing('stand up');
let thing4 = new Thing('eat lunch');

thing1.complete();
thing4.complete();

fleet.push(thing1); 
fleet.push(thing2);
fleet.push(thing3);
fleet.push(thing4);

//fleet.print();

fleet.sort(function(a: Thing, b: Thing) {
  return a.compareTo(b);
})

console.log(fleet);