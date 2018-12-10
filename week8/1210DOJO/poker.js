'use strict';

class Deck {
	constructor() {
		this.deck = []
		this.dealtCards = []
	}

	// generates a deck of cards
	generateDeck() {
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
	printDeck() {
		if (this.deck.length == 0){
			console.log('deck is empty right now.')
		} else {
			for (let card = 0; card < this.deck.length; card++) {
				console.log(this.deck[card]);
			}
		}
	}

	suffleDeck(){
		let currentIndex = this.deck.length, tempValue, randomIndex;

		while (0 != currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			tempValue = this.deck[currentIndex];
			this.deck[currentIndex] = this.deck[randomIndex];
			this.deck[randomIndex] = tempValue;
		}
	}

	deal () {
		let dealtCards = this.deck.shift();
		this.dealtCards.push(dealtCards);
		return dealtCards;
	}

	replace () {
		this.deck.unshift(this.dealtCards.shift());
	}

	clearDeck () {
		this.deck = [];
	}
}

const deck = new Deck;

deck.generateDeck();

deck.suffleDeck();
//deck.printDeck();

console.log(deck.deal());

deck.deal();
