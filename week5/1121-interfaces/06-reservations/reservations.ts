import { Reservationy } from './interface';

class Reservation implements Reservationy {
  createBookingCode(): string {
    let code = '';
    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < 8; i++)
      code += charSet.charAt(Math.floor(Math.random() * charSet.length));
    return code;
  }

  chooseDayOfWeek(): string {
    let daySet: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let day = daySet[Math.floor(Math.random() * daySet.length)];
    return day;
  }

  getCodeBooking(): string {
    return this.createBookingCode();
  }

  getDowBooking(): string {
    return this.chooseDayOfWeek();
  }
}

let reservation1 = new Reservation;
console.log(reservation1.getCodeBooking());
console.log(reservation1.getDowBooking());
// console.log(getRandomInt(3));
// expected output: 0, 1 or 2