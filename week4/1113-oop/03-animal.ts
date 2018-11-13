// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

export { };

class Animal {
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