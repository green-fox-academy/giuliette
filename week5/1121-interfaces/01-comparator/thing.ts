'use strict'
import { Comparable } from "./comparator";

export class Thing implements Comparable{
  private name: string;
  private completed: boolean; 

  constructor(name: string) {
    this.name = name;
  }
  
  public complete() { // return types
    this.completed = true;
  }
  
  public getName():string {
    return this.name;
  }
  
  public getCompleted():boolean {
    return this.completed;
  }

  compareTo(other: Thing): number {
    if (this.completed && !other.completed){
      return -1;
    } 
    if (!this.completed  && other.completed){
      return 1;
    } 
    return 0;
  }
}