'use strict';

import { Thing } from "./thing";
import { Fleet } from "./fleet";
import { fileURLToPath } from "url";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */


let thing1 = new Thing('Get milk');
let thing2 = new Thing('remove the obstacles');
let thing3 = new Thing('stand up');
let thing4 = new Thing('eat lunch');

thing3.complete();
thing4.complete();

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);

fleet.print();