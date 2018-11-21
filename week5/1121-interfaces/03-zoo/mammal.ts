'use strict'
import { Animal } from "./animal";

export class Mammal extends Animal {

  constructor(name, age, color, health){
    super(name, age, color, health);
  }
  breed(): string{
    return 'pushing miniature versions out';
  }
  getName(): string{
    return this.name;
  }
}

// let mammal = new Mammal('Koala', 3, 'brownish', 10);
// console.log(mammal);