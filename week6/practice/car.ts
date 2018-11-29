import { readFromFile, writeToFile, appendToFile } from './fileIO';

// it should have 3 main properties: an hasParkingTicket, a license plate, and a manufacture year
// create a constructor for setting those values
// use acces modifiers, to protect the object's values

export class Car {
  private hasParkingTicket: number;
  private licensePlate: string;
  private manufactureYear: number;

  constructor(hasParkingTicket: number, licensePlate: string, manufactureYear: number){
    this.hasParkingTicket = hasParkingTicket;
    this.licensePlate = licensePlate;
    this.manufactureYear = manufactureYear;
  }

  getHasparkingTicket(){
    return this.hasParkingTicket;
  }

  getLicensePlate(){
    return this.licensePlate;
  }

  getmanufactureYear(){
    return this.manufactureYear;
  }
}