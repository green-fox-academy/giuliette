export abstract class Instruments {
  protected name: string;

  constructor(name: string){
    this.name = name;
  }
  abstract play();
}