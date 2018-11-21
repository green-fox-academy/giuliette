'use strict'

export abstract class Animal {
  name: string;
  age: number;
  color: string;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  abstract getName();
  abstract breed();
  abstract sound();
}