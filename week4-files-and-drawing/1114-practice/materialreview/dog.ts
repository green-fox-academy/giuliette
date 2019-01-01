//class - creating objects also: check types

export class Dog {
  static idCounter = 1; //static: constructor makes individual ids to all objects, stores them in the object

  id: number;
  name: string;
  breed: string;

  constructor(name:string, breed = "unknown") {//can have default, will be rewritten if given to the actual object
      this.id = Dog.idCounter;
      this.name = name;
      this.breed = breed;
      Dog.idCounter++;
  }
}