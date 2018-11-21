import { StringedInstrument } from "./stringedinstruments";

class ElectricGuitar extends StringedInstrument {
  //name
  //strings
  //play method
  //sound method
  
  constructor(numberOfStrings: number = 6){
    super(numberOfStrings, 'Electric Guitar');
  }
  
  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }

  sound(){
    return 'tWaang';
  }

}

let guitar = new ElectricGuitar();
guitar.play();

