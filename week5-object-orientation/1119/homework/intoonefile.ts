'use strict'
export {};
//person

export class Person {
  name: string;
  age: number;
  gender: string;
  constructor (name:string = 'Jane Doe', age: number = 30, gender: string = 'female'){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce(){
    console.log(`Hi, I'm name, a ${this.age} year old ${this.gender}.`);
  }
  getGoal(){
    console.log(`My goal is: Live for the moment!`);
  }
}

// student
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
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'the School of Life', skippedDays: number = 0){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }
}

//mentor 
class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;
  getGoal(){
    console.log('Educate brilliant junior software developers.');
  }
  introduce(){
    console.log(`Hi, I'm  ${this.name}, a ${this.age} year old gender ${this.level} mentor.`);
  }
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;  
  }
}

//sponsor
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
    this.hiredStudents = hiredStudents;
  }
}

//test imput
let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}