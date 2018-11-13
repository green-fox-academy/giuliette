'use strict';

class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }

  public getName() {
    return this.name;
  }

  public getCompleted() {
    return this.completed;
  }

}

export { Thing };

