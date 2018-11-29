import { readFromFile, writeToFile, appendToFile } from './fileIO';
import { Car } from './car'
import { isNull } from 'util';

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

  addCarToFile(car: Car, fileName: string): void {
    appendToFile(fileName, `\n${car.getLicensePlate()},${car.getmanufactureYear()},${car.getHasparkingTicket()}`);
  }

  removeCar(licenseplate: string, fileName: string): void {
    this.cars.forEach((e, i) => {
      if (e.getLicensePlate() === licenseplate) {
        this.cars.splice(i, 1);
      }
    });
    let fileContent = readFromFile(fileName);
    if (fileContent !== null) {
      let parkPlace: string[][] = fileContent.split('\n').map(e => {
        return e.split(',');
      });
      parkPlace.forEach((element, index) => {
        if (element[0] === licenseplate) {
          parkPlace.splice(index, 1);
        }
      });
      let tempString = '';
      parkPlace.forEach(e => {
        tempString += e[0] + (',') + e[1] + (',') + e[2] + ('\n');
      });
      writeToFile(fileName, tempString);
    }
  }
  //Reka
  removeValami(licenseplate: string, fileName: string): void {
    let variableReka: string = readFromFile(fileName);
    if (variableReka !== null) {
      let splittedContent: string[] = variableReka.split('\n');
      splittedContent.forEach((line, index) => {
        if (line.indexOf(licenseplate) !== -1) {
          splittedContent.splice(index, 1); //
        }
      });
      writeToFile(fileName, splittedContent.join('\n'));
    }
  }

  getOldest(fileName: string): string {
    let fileContent: string = readFromFile(fileName);
    if (fileContent !== null) {
      let fileContentSplitted: string[] = fileContent.split('\n');
      let carList: Car[] = fileContentSplitted.map(line => {
        return new Car(parseInt(line.split(',')[2]),line.split(',')[0],parseInt(line.split(',')[1]));
      });
      carList.sort((a, b) => {
        return a.getmanufactureYear() - b.getmanufactureYear();
      });
      return carList[0].getLicensePlate();
    }
  }

  // getPenalty() method which returns a new array of car's who hasn't got a parking ticket from the file
  getPenalty(fileName: string): Car[] {
    let fileContent: string = readFromFile(fileName);
    if (fileContent !== null) {
      let fileContentSplitted: string[] = fileContent.split('\n');
      let carList: Car[] = fileContentSplitted.map(line => {
        return new Car(parseInt(line.split(',')[2]),line.split(',')[0],parseInt(line.split(',')[1]));
      });
      return carList.filter(car => {
        car.getHasparkingTicket() === 0;
      });
    }
  }
}

