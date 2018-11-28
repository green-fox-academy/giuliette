'use strict'

export class Animal {
  hungerValue: number;
  thirstValue: number;
  constructor(hungerV: number = 50, thirstV: number = 50){
    this.hungerValue = hungerV;
    this.thirstValue = thirstV;
  }
  eat(): any {
    return this.hungerValue + 1;
  }
  drink(): any {
    return this.thirstValue + 1;
  }
  play(): any {
    return `${this.eat()}, ${this.drink()}`
  }
}

let kiskutya = new Animal();
let kiscica = new Animal();

console.log('kiskutya: ', kiskutya.play());
console.log('kiscica: ', kiscica.eat());