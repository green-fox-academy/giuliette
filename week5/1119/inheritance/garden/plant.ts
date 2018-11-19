export class Plant {
  protected waterLvl: number;
  protected color: string;
  waterTrsh: number;
  absorbtion: number;

  constructor(color: string, waterTrsh: number, absorbtion: number) {
    this.waterLvl = 0;
    this.color = color;
    this.waterTrsh = waterTrsh;
    this.absorbtion = absorbtion;
  }

  whatColor() {
    return this.color;
  }

  needsWater() {
    return this.waterLvl;
  }

  whatType() {
    return this.constructor.name; //stringet ad
  }

  getState() {
    if (this.whatType() === 'Tree') {
      if (this.needsWater() < 10) {
        console.log(`The ${this.whatColor()} ${this.whatType()} needs water`);
        return true;
      } else {
        console.log(`The ${this.whatColor()} ${this.whatType()} doesnt need water`);
        return false;
      }
    } else if (this.whatType() === 'Flower') {
      if (this.needsWater() < 5) {
        console.log(`The ${this.whatColor()} ${this.whatType()} needs water`);
        return true;
      } else {
        console.log(`The ${this.whatColor()} ${this.whatType()} doesnt need water`);
        return false;
      }
    }
  }
}

