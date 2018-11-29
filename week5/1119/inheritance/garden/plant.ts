export abstract class Plant {
  protected waterLvl: number;
  protected color: string;
  protected waterTrsh: number; //var names, protected
  protected absorbtion: number;
  //getter!!!
  constructor(color: string, waterTrsh: number, absorbtion: number) {
    this.waterLvl = 0;
    this.color = color;
    this.waterTrsh = waterTrsh;
    this.absorbtion = absorbtion;
  }
  //return!!!
  whatColor() {
    return this.color;
  }

  needsWater(): boolean {
    return this.waterLvl < this.waterTrsh;
  }

  whatType(): string {
    return this.constructor.name;
  }

  watering(waterGiven: number): void {
    this.waterLvl = this.waterLvl + waterGiven * this.absorbtion;
  }
}

