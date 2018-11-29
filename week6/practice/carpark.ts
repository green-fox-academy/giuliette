import { readFromFile, writeToFile, appendToFile } from './fileIO';
import { Car } from './car'

// it should have a carPark array of Cars
// addCar() method which add's a new car to the carPark
// addCarToFile() method which add's a new car to the file, with 3 parameter: license plate, year of manufacture, and a parking ticket(0 or 1)
// removeCar() method which removes a car, by licenseplate
// getOldest() method which returns the oldest car's license plate from the file
// getPenalty() method which returns a new array of car's who hasn't got a parking ticket from the file

export class CarPark {
  cars: Car[] = [];

  addCar(car: Car): void {
    this.cars.push(car);
  }
  addCarToFile(car: Car, fileName: string) {
    appendToFile(fileName, `\n${car.getLicensePlate()},${car.getmanufactureYear()},${car.getHasparkingTicket()}`);
  }

  removeCar(licenseplate: string, fileName: string) {
    this.cars.forEach((e, i) => {
      if (e.getLicensePlate() === licenseplate) {
        this.cars.splice(i, 1);
      }
    });
  }
}

