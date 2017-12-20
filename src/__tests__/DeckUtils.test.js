import DeckUtils from './../DeckUtils';

describe('DeckUtils.createDeck', () => {
	it('return array of number from 0 to 52*n', () => {
		for (var i = 1; i < 3; i++) {
			const deck = DeckUtils.createDeck(i);
			expect(deck).toHaveLength(52*i);
			expect(DeckUtils.isUnshuffled(deck)).toBe(true);
		}
	});
});

describe('DeckUtils.shuffleDeck', () => {
	it('shuffles array in place', () => {
		const deck = DeckUtils.createDeck();
		expect(DeckUtils.isUnshuffled(deck)).toBe(true);
		DeckUtils.shuffleDeck(deck);
		expect(DeckUtils.isUnshuffled(deck)).toBe(false);
	});
});

describe('DeckUtils', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('contructor creates shuffled deck', () => {
		for (var i = 1; i < 3; i++) {
			const deck = new DeckUtils(i);
			expect(deck.isShuffled()).toBe(true);
			expect(deck.cardsLeft()).toBe(52*i);
		}
	});
	it('provides interface to draw cards',()=>{
		DeckUtils.shuffleDeck = jest.fn();
		const deck = new DeckUtils();
		expect(deck.isShuffled()).toBe(false); // Check that the mock is active

		for (var i = 51; i >= 0; i--) {
			expect(deck.drawCard()).toBe(i);
			expect(deck.cardsLeft()).toBe(i);
		}
		expect(deck.drawCard()).toBe(undefined);
	});
});