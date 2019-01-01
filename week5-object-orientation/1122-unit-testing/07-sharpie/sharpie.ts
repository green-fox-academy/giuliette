'use strict';
// Search back in your own project the Sharpie class you made on the OO workshop
// Create tests that covers all types of input (like in the previous workshop exercise)

export { Sharpie };

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor (color: string, penWidth: number = 20, inkAmount: number = 100){
    this.color = color;
    this.width = penWidth;
    this.inkAmount = inkAmount;
  }
  use(): number {
    return this.inkAmount - 10;
  }
}

let blueSharpie = new Sharpie('red');
let redSharpie = new Sharpie('blue');
