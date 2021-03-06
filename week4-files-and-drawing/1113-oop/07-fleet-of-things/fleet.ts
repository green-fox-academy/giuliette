'use strict';
import { Thing } from "./thing";

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing) { //return type
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

export { Fleet };