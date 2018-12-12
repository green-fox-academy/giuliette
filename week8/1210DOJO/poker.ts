'use strict';

export class Deck {
  private name: string;
  private deck: string[] = [];
  private dealtCards: string[];
  private suit: string;
  private value: string;
  // private name: string;
  // private suit: string;
  // private value: string;

  constructor(){
<<<<<<< HEAD
=======
    this.name = 
>>>>>>> bdd9219b2beca24ad52d6b71f56be648fad48021
    this.deck = [];
    this.dealtCards= [];
    this.suit = '';
    this.value = '';
  }
  
  generateDeck(){
    function card(suit, value): any {
      this.name = value + ' of ' + suit;
      this.suit = suit;
      this.value = value;
      return {name: this.name, suit: this.suit, value: this.value};
      //return `name: ${this.name}, suit: ${this.suit}, value: ${this.value}`;
    }

    let values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];
    let suits = ['Clubs', 'Diamons', 'Spades', 'Hearts'];

    for (let s = 0; s < suits.length; s++){
      for (let v = 0; v < values.length; v++){
        this.deck.push(card(suits[s],values[v]));
      }
    }
  }
}

let deck = new Deck();

console.log(deck.generateDeck());
