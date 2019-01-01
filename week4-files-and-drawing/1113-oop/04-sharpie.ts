// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), 
// inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

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

//console.log('my favourite sharpie is: ',blueSharpie);
//console.log('my second favourite sharpie is: ', redSharpie);

// so:

//console.log('I used it a lot.. so now: ', blueSharpie.use());

