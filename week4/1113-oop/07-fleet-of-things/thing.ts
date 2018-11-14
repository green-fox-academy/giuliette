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

  public get Name() {
    return this.name;
  }

  public get Completed() {
    return this.completed;
  }
}

export { Thing };

