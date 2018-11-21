class DiceSet {
  dices: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
    this.dices = [];
    for (let i = 0; i < this.numOfDices; i++) {
      this.dices.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dices;
  }

  reroll(index?: number):void {
    if (index == undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        this.dices[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dices[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index?: number):void {
    if (index == undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        console.log(this.dices[i]);
      }
    } else {
      console.log(this.dices[index]);
    }
  }
}


let diceSet = new DiceSet();

diceSet.roll();

//diceSet.getCurrent();

while (!diceSet.dices.every(e => e === 6)) {
  for (let i = 0; i < this.numOfDices; i++) { //type
    if (diceSet.dices[i] !== 6) {
      diceSet.reroll(i);
    } 
  }
}

diceSet.getCurrent();
