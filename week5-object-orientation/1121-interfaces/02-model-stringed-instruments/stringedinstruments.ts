import { Instruments } from "./instruments";

export abstract class StringedInstrument extends Instruments {
  protected numberOfStrings: number;

  constructor(numberOfStrings: number, name: string){
    super(name);
    this.numberOfStrings = numberOfStrings;
  }
  
  abstract sound();
  abstract play();
}

