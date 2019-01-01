'use strict'
export {};

class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  getGoal(){
    console.log('to be a junior developer');
  }
  introduce(){
    console.log(`Hi, I\'m ${this.name}, a ${this.age} old ${this.gender} from ${this.previousOrganization}, who skipped ${this.skippedDays} from the course.`)
  }
  skipDays(numberOfDays){
    return this.skippedDays + numberOfDays;
  }
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'the School of Life', skippedDays){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }
}

