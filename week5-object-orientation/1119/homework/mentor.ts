'use strict'
export {};

class Mentor {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;
  level: string;

  getGoal(){
    console.log('Educate brilliant junior software developers.');
  }
  introduce(){
    console.log(`Hi, I'm  ${this.name}, a ${this.age} year old gender ${this.level} mentor.`);
  }

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: 'string'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;  
  }
}
