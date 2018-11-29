import { Plant } from './plant'

// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

export class Garden {
  protected name: string;
  protected onTheLandscape: Plant[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(plant: Plant): void { //retrun type
    this.onTheLandscape.push(plant);
  }

  watering(waterGiven: number): void {
    let thirsty: Plant[] = [];
    this.onTheLandscape.forEach(element => {
      if (element.needsWater) {
        thirsty.push(element);
      }
    });
    let watering = waterGiven / thirsty.length;
    thirsty.forEach(element => { //nameeeeees!
      element.watering(watering);
    })
  }

  //return!
  show(): void {
    this.onTheLandscape.forEach(element => {
      console.log(`The ${element.whatColor()} ${element.whatType()} ${element.needsWater() ? 'needs water' : 'doesnt need water'}`);
    });
  }
}

