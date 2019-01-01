'use strict'
import { Reptile } from './reptile';
import { Mammal } from './mammal';
import { Bird } from './bird';



//The Zoo app should be invoked by the following example code outside of the animals package:
let reptile = new Reptile("Crocodile", 3 , 'greenish', 20, 100000);
let mammal = new Mammal("Koala", 3, 'color', 10);
let bird = new Bird("Parrot", 2, 'colorful', 2);

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

//We expect the following output:

// How do you breed?
// A Crocodile is breeding by laying eggs.
// A Koala is breeding by pushing miniature versions out.
// A Parrot is breeding by laying eggs.