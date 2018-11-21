'use strict'
import { Thing } from "./thing";

export class Fleet {
  public things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing) { 
    this.things.push(thing);
  }
}
