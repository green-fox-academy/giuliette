import { Plant } from './plant'

// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

export class Garden {
  name: string;
  onTheLandscape: Plant[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(plant: Plant) {
    this.onTheLandscape.push(plant);
  }

  watering(wasser: number): void {
    let thirsty: Plant[] = [];
    this.onTheLandscape.forEach(element => {
      if (element.needsWater) {
        thirsty.push(element);
      }
    });
    let locsolas = wasser / thirsty.length;
    thirsty.forEach(element => {
      element.watering(locsolas);
    })
  }
  show() {
    this.onTheLandscape.forEach(element => {
      console.log(`The ${element.whatColor()} ${element.whatType()} ${element.needsWater() ? 'needs water' : 'doesnt need water'}`);
    });
  }

}