'use strict'
import { Thing } from "./thing";

export class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing) { 
    this.things.push(thing);
  }

  print() {
    this.things.forEach(function(element, index, array) {
      if (element.getCompleted()){
        console.log(`${index + 1}. [x] ${element.getName()}`)
      } else {
        console.log(`${index + 1}. [ ] ${element.getName()}`)
      }
    });
  }
}
