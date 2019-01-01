'use strict'

export abstract class Animal {
  name: string;
  age: number;
  color: string;
  health: number;

  constructor(name: string, age: number, color: string, health: number) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.health = health;
  }

  abstract getName(): string;
  abstract breed(): string;
}