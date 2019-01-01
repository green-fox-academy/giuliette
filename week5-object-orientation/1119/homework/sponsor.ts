'use strict'
export { };

class Sponsor {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;
  level: string;
  company: string;
  hiredStudents: number;

  introduce() {
    console.log(`Hi, I'm  ${this.name}, a ${this.age} year old gender ${this.level} mentor.`);
  }
  hire() {
    return this.hiredStudents + 1;
  }
  getGoal(){
    console.log('Hire brilliant junior software developers.');
  }

  constructor(name: string = 'Janet Doe', age: number = 34, gender: string = 'female', company: string = 'Google', hiredStudents: number = 0){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = this.hiredStudents;
  }
}
