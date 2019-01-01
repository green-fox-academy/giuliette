'use strict'
import { Comparable } from "./comparator";
import { Printable } from './printable';
import { dominoes } from "./dominoes";

export class Domino implements Comparable, Printable {
  values: number[];

  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  compareTo(other: Domino): number {
    return this.values[0] - other.values[0];
  }

  printAllFields() {
    console.log(this.values);
  }
}

