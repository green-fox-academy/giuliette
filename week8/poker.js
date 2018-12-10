'use strict';

class Deck {
	constructor() {
		this.deck = []
		this.dealt_cards = []
	}

	// generates a deck of cards
	generate_deck() {
		// creates card object
		let card = (suit, value) => {
			this.name = value + ' of ' + suit;
			this.suit = suit;
			this.value = value;

			return { name: this.name, suit: this.suit, value: this.value };
		}

		let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
		let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];

		for (let s = 0; s < suits.length; s++) {
			for (let v = 0; v < values.length; v++) {
				this.deck.push(card(suits[s], values[v]));
			}
		}
	}

	// prints the deck of card objects
	print_deck() {
		for (let c = 0; c < this.deck.length; c++) {
			console.log(this.deck[c]);
		}
	}
}

const deck = new Deck;

deck.generate_deck();
deck.print_deck();

