'use strict'
import { Animal } from "./animal";

export class Reptile extends Animal {
  name: string;
  color: string;
  dangerLvl: number;
  constructor(name, age, color, health, dangerLvl){
    super(name, age, color, health);
    this.name = name;
    this.dangerLvl = dangerLvl;
  }

  breed(): string{
    return 'laying eggs';
  }
  getName(){
    return this.name;
  }
}

//let crocodile = new Reptile('Crocodile', 2, 'green', 10, 10000);
//console.log(crocodile);
