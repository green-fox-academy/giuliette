import { CarPark } from "./carpark";
import { Car } from './car'

let nepliget = new CarPark();
let auto = new Car(0, '6776bb', 8999);

nepliget.addCarToFile(auto, 'cars.csv');
nepliget.addCarToFile(new Car(0, 'ABC-333', 2000), 'cars.csv');
nepliget.removeCar('ABC-333', 'cars.csv');
nepliget.removeValami('HAL-621', 'cars.csv');
