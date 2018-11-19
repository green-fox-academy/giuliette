import { Plant } from './plant'

// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

export class Garden {
  name: string;
  numberOfPlants: number;
  onTheLandscape: Plant [] = [];

  constructor (name:string, numberOfPlants: number){
    this.name = name;
    this.numberOfPlants = numberOfPlants;
  }

  add(plant: Plant){
    //push plant to array
    this.onTheLandscape.push(plant);
    this.numberOfPlants += 1;
  }

  watering(){
    this.onTheLandscape.forEach(element => {
      console.log(element);
    });
  }
}