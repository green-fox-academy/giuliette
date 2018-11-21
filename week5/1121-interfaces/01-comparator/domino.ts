import { Comparable } from "./comparator";
'use strict'


export class Domino implements Comparable {
  values: number[];

  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  compareTo(other: Domino){
    return this.values[0] - other.values[0]; 
    // if (this.values[1] < other.values[0]){
    //   return -1;
    // } else if (this.values[1] > other.values[0]){
    //   return 1;
    // } else {
    //   return 0;
    // }
  }
  //-1, 0 or 1 
}

