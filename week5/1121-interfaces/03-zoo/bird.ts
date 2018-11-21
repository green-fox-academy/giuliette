'use strict'
import { Animal } from "./animal";

export class Bird extends Animal {

  constructor(name, age, color, health){
    super(name, age, color, health);
  }
  breed(): string{
    return 'laying eggs';
  }
  getName(): string{
    return this.name;
  }
}

// let bird = new Bird('Parrot', 3, 'color', 10)
// console.log(bird);