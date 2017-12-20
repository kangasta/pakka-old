class DeckUtils {
	cards = [];
	num_decks = 0;

	constructor(n=1) {
		this.num_decks = n;
		this.resetDeck();
	}

	resetDeck() {
		this.cards = DeckUtils.createDeck(this.num_decks);
		DeckUtils.shuffleDeck(this.cards);
	}

	isShuffled() {
		return !DeckUtils.isUnshuffled(this.cards);
	}

	drawCard() {
		return this.cards.pop();
	}

	cardsLeft() {
		return this.cards.length;
	}

	// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
	static shuffleDeck(deck) {
		for (let i = deck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[deck[i], deck[j]] = [deck[j], deck[i]];
		}
	}

	static createDeck(n=1) {
		var cards = [];
		for (var i = 0; i < n*52; i++) {
			cards.push(i);
		}
		return cards;
	}

	static isUnshuffled(deck) {
		return !!deck.reduce((a,b)=>{
			return (b === (a + 1)) ? b : 0;
		});
	}
}

export default DeckUtils;
