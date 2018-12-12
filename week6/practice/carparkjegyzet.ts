import { appendToFile, readFromFile, writeToFile } from './fileio';
import { Car } from './car';

export class CarPark {                          //8.lépés Carpark class létrehozása
  cars: Car[] = [];                             //9.lépés cars array létrehozása, Car típusú


// 1.feladat
//addCar() method which add's a new car to the carPark

  addCar(car: Car): void {                     //10.lépés class, paraméterbe az autó amit hozzáadunk a parkhoz...nem returnölünk semmit (vissza)
    this.cars.push(car);                       //a cars arrayambe pusholom a carokat, amit a method paraméterében adtam meg
  }

// 2.feladat
//addCarToFile() method which add's a new car to the file, with 3 parameter:
// license plate, year of manufacture, and a parking ticket(0 or 1)

  addCarToFile(car: Car, fileName: string): void {             //11.lépés class, paraméter autó amit hozzáadunk a fájlhoz és a fájlnév
    appendToFile(fileName, `\n${car.getLicensePlate()},${car.getManufactureYear()},${car.getHasParkingTicket()}`);
  }

// 3.feladat
//removeCar() method which removes a car, by licenseplate

  removeCar(licensePlate: string, fileName: string): void {          //12.lépés class, a licenseplate ami alapján keresünk (és a fájlnév) a paraméterek
    this.cars.forEach((e, i) => {                                    //13.lépés végig megyünk a cars arrayen forEachel
      if (e.getLicensePlate() === licensePlate) {                    //ha az elementem licensplate ugyanaz, mint amit megadunk
        this.cars.splice(i, 1);                                      //akkor kispliceolom ezt az autót (kiveszem az arrayből) 
      }
    });

// +feladat

    let fileContent = readFromFile(fileName);                      //14.lépés fileContent válzotó, amiben a fájlt beolvassuk
    if (fileContent !== null) {                                    //15.lépés ha a fájl tartalma nem üres
      let parkPlace: string[][] = fileContent.split('\n').map(line => {                //16.lépés array létrehozás, amiben a filecontentet
        return line.split(',');                                //felbontjuk sorokra és kimapaljük belőle az elemeket, úgy, hogy szétválasztjuk vesszőkre
    
      });
      parkPlace.forEach((line, i) => {                        //17.lépés végig megyünk ezen az arrayen egy forEachel és, ha az arrayek 0.indexén
        if (line[0] === licensePlate) {                      //lévő rendszám megegyezik a rendszámmal, amit beadunk, akkor ezt az indexű arrayt kivesszük
          parkPlace.splice(i, 1);
        }
      });
      let tempString: string = '';
      parkPlace.forEach(line => {
        tempString += line[0] + ',' + line[1] + ',' + line[2] + '\n';            //18.lépés visszacsatoljuk a vesszőket, hogy újra szöveg legyen
      });
      writeToFile(fileName, tempString);                          //19.lépés visszaírjuk a fájlba
    }
  }


//4.feladat
// getOldest() method which returns the oldest car's license plate from the file

  getOldest(fileName: string): string {                               //20.lépés method és a fájl, mint paraméter
    let fileContent = readFromFile(fileName);                         //21.lépés fileContent válzotó, amiben a fájlt beolvassuk
    if (fileContent !== null) {                                       //22.lépés ha a fájl tartalma nem üres
      let parkPlace: string[] = fileContent.split('\n');              //23.lépés létrehozunk egy string arrayt amiben szétszedjük a filet sorokra
      let carArray: Car[] = parkPlace.map(line => {                    //24.lépés  egy Car típusú array létrehozás, amivel mappeljük a parkplace arrayünket
        return new Car(line.split(',')[0], parseInt(line.split(',')[1]), parseInt(line.split(',')[2]));  //25.lépés egy új autót dob vissza
      });                                                             //spliteljük az arrayt indexeinél, ahol vesszővel van elválasztva
      carArray.sort((a, b) => {                                        //25.lépés sortoljuk, amivel az autókat sorba teszi gyártási év alapján
        return a.getManufactureYear() - b.getManufactureYear();
      });
      return carArray[0].getLicensePlate();                      //26.lépés a 0.indexűt returnöljük, mert a legrégibb autó kerül legelőre a sort után
    }
  }

//5.feladat
// getPenalty() method which returns a new array of car's who hasn't got a parking ticket from the file

  getPenalty(fileName: string): Car[] {                        //27.lépés method, aminek beadjuk a fájl nevét, mint paraméter és Car típusú arrayt várunk vissza
    let fileContent = readFromFile(fileName);                 //28.lépés fileContent válzotó, amiben a fájlt beolvassuk
    if (fileContent !== null) {                                //29.lépés ha a fájl tartalma nem üres
      let parkPlace: string[] = fileContent.split('\n');        //30.lépés létrehozunk egy string arrayt amiben szétszedjük a filet sorokra
      let carArray: Car[] = parkPlace.map(line => {             //31.lépés egy Car típusú array létrehozás, amivel mappeljük a parkplace arrayt
        return new Car(line.split(',')[0], parseInt(line.split(',')[1]), parseInt(line.split(',')[2])); //32.lépés  egy új autót dob vissza
      });                                                         //spliteljük az arrayt indexeinél, ahol vesszővel van elválasztva
      return carArray.filter(e => {                             //33.lépés kiszedjük a carArrayből azokat az elemeket, amiknek nincs parkolójegye
        e.getHasParkingTicket() === 0;
      });
    }
  }
}

// getPenalty(fileName: string) {
//   let content = readFromFile(fileName);
//   let noParkingTicket: string[] = [];
//   if (content !== null) {
//     content.split('\r\n').forEach(e => {
//       if(e.split(',')[2] === '0') {
//         noParkingTicket.push(e.split(',')[0]);
//       }
//     });
//   }
//   return noParkingTicket;
// }
// }

// getOldest(fileName: string): string {
//   let content = readFromFile(fileName);
//   let array = [];
//   if (content !== null) {
//    content.split('\r\n').forEach(e => {
//      array.push(e.split(','));
//    });
   
//     let index = 0;
//    let smallest = 9999;
//    array.forEach((e, i) => {
//       console.log(e);
//       if (e[1] < smallest) {
//         index = i;
//         smallest = e[1];
//       }
//     });
//    return array[index][0];
//  }
}