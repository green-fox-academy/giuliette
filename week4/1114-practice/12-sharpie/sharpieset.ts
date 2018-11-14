// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpies
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

import { Sharpie } from "../../1113-oop/04-sharpie";

class SharpieSet {
  set: Sharpie[] = []; //sharpie type objects

  constructor(set: Sharpie[]) {
    this.set = set;
  }

  countUsable(): void {
    for (let i: number = 0; i < this.set.length; i++) {
      if (this.set[i].inkAmount !== 0) {
        console.log(this.set[i]);
      }
    }
  }

  removeTrash() {
    for (let i: number = 0; i < this.set.length; i++) {
      if (this.set[i].inkAmount === 0) {
        console.log(this.set.splice(i, 1));
        //return this.set;
      }
    }
  }
}

function sharpieFactory(): Sharpie[] {
  return [
    new Sharpie('blue', 1),
    new Sharpie('black', 1, 0),
    new Sharpie('yellow', 1, 50),
    new Sharpie('orange', 1, 15),
    new Sharpie('pink', 1, 3),
    new Sharpie('violet', 1, 0),
    new Sharpie('purple', 1, 4),
    new Sharpie('turquoise', 1, 73),
    new Sharpie('darkblue', 1, 44),
    new Sharpie('brown', 1, 52),
  ];
}

let doboz: Sharpie[] = sharpieFactory();

let sharpieObject = new SharpieSet(doboz);

sharpieObject.countUsable();
//console.log(sharpieObject.removeTrash());
sharpieObject.removeTrash();
//console.log(`after removing the empty ones: ${sharpieObject}`);
//console.log(`kidobtam: ${valami}`)