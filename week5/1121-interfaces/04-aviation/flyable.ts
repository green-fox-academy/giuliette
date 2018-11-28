'use strict'
import { Animal } from '../03-zoo/animal';

// Flyable
// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class
// it should have at least 3 fields
// Extend Helicopter class from Vehicle
// implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
// implement yourˇFlyable interface

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  mass: number;
  price: number;
  isArmy: boolean;
}

class Helicopter extends Vehicle implements Flyable {
  land() { };
  fly() { };
  takeOff() { };
}

class Bird extends Animal implements Flyable {
  land() { };
  fly() { };
  takeOff() { };
  breed(): string{
    return 'laying eggs';
  }
  getName(): string{
    return name;
  }
}



