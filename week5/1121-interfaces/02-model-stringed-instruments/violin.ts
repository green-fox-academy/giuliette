import { StringedInstrument } from "./stringedinstruments";

class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4){
    super(numberOfStrings, 'Violin');
  }
  
  play(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }

  sound(){
    return 'Screech';
  }

}

let violin = new Violin();
violin.play();

