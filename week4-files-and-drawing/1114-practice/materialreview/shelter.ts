import { Dog } from "./Dog";
import { Person } from "./Person";

export class Shelter {
  name: string;
  private dogs: Dog[] = []; //empty array, should be filled when constructing, contains dog type variables (which have predefined properties)

  constructor(name: string) {
    this.name = name;
  }
  getDogs() {
    return this.dogs.slice(0);
  }

  addDog(dog: Dog) {
    this.dogs.push(dog);
  }

  adoptDog(person: Person, dogId: number) {
    const dog = this.getDogById(dogId);
    if (dog) {
      person.dog = dog;
      const index = this.dogs.indexOf(dog);
      this.dogs.splice(index, 1); //splice returns a new array, so the original is not overwritten in the process
    } else {
      console.log("Sorry, there is no dog with the ID of: ", dogId);
    }
  }

//function can be arrow function as well
  private getDogById(id: number): Dog {
    return this.dogs.find(function(dog: Dog) { //undefined will return false
      return dog.id === id;
    });
  }
}