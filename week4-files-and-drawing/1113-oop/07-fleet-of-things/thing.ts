'use strict';

class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete():boolean {
    this.completed = true;
  }

  public getName():string { // return types
    return this.name;
  }

  public getCompleted():boolean {
    return this.completed;
  }
}

export { Thing };

