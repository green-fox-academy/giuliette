import { StringedInstrument } from "./stringedinstruments";

class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4){
    super(numberOfStrings, 'Bass Guitar');
  }
  
  play(): void{
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }

  sound(): string{
    return 'Duum-duum-duum';
  }
}

let bassGuitar = new BassGuitar();
bassGuitar.play();
