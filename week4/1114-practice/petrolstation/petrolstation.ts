// Petrol Station
// Create a Station and a Car classes

// Station
//    gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {
  gasAmount: number;

  constructor (gasAmount: number = 100){
    this.gasAmount = gasAmount;
  }

  refill (car: Car) {
    return this.gasAmount -= car.capacity; //this is an empty car 
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  constructor (gasAmount: number = 0, capacity: number = 100){
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }

  fill (station: Station){
    return this.capacity - this.gasAmount;
  }
}

let omv = new Station(100);

let firstCar = new Car(56);
let secondCar = new Car(10, 90);

console.log(omv.refill(firstCar));
//console.log(omv.refill(secondCar));

