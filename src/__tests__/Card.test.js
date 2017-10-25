import React from 'react';
import ReactDOM from 'react-dom';

import Card from './../Card';

describe('Card', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Card />, div);
	});
});

describe('Card.isFaceCard', () => {
	it('returns always true for J, Q, and K', () => {
		expect(Card.isFaceCard(10+13)).toBeTruthy();
		expect(Card.isFaceCard(11+13*2)).toBeTruthy();
		expect(Card.isFaceCard(11+13*3)).toBeTruthy();
	});
	it('returns always false for 2 to 9', () => {
		for (var i = 1; i < 9; i++) {
			expect(Card.isFaceCard(i+i*13)).toBeFalsy();
			expect(Card.isFaceCard(i+i*13,true,true)).toBeFalsy();
		}
	});
	it('returns true for T when set to', () => {
		expect(Card.isFaceCard(9+13)).toBeFalsy();
		expect(Card.isFaceCard(9+2*13, false, true)).toBeTruthy();
	});
	it('returns true for A when set to', () => {
		expect(Card.isFaceCard(0+13)).toBeFalsy();
		expect(Card.isFaceCard(0+2*13, true, false)).toBeTruthy();
	});
});

describe('Card.toNumLetter', () => {
	it('returns number that would be on card', () => {
		for (var i = 0; i < 52; i++) {
			switch(i % 13) {
			case 0:
				expect(Card.toNumLetter(i)).toBe('A');
				break;
			case 9:
				expect(Card.toNumLetter(i)).toBe('10');
				expect(Card.toNumLetter(i, false)).toBe('T');
				break;
			case 10:
				expect(Card.toNumLetter(i)).toBe('J');
				break;
			case 11:
				expect(Card.toNumLetter(i)).toBe('Q');
				break;
			case 12:
				expect(Card.toNumLetter(i)).toBe('K');
				break;
			default:
				expect(Card.toNumLetter(i)).toBe((i % 13 + 1).toString());
				break;
			}
		}
	});
});

describe('Card.toSuitLetter', () => {
	it('returns suit that would be on card', () => {
		for (var i = 0; i < 52; i++) {
			switch(i / 13) {
			case 0:
				expect(Card.toSuitLetter(i)).toBe('♠');
				expect(Card.toSuitLetter(i,true)).toBe('s');
				break;
			case 1:
				expect(Card.toSuitLetter(i)).toBe('♣');
				expect(Card.toSuitLetter(i,true)).toBe('c');
				break;
			case 2:
				expect(Card.toSuitLetter(i)).toBe('♥');
				expect(Card.toSuitLetter(i,true)).toBe('h');
				break;
			case 3:
				expect(Card.toSuitLetter(i)).toBe('♦');
				expect(Card.toSuitLetter(i,true)).toBe('d');
				break;
			}
		}
	});
});

describe('Card.toCardString', () => {
	it('returns card log string', () => {
		for (var i = 0; i < 52; i++) {
			expect(Card.toCardString(i, true, false)).toHaveLength(2);
		}
	});
});

describe('Card.toSuitName', () => {
	it('returns suit that would be on chat', () => {
		for (var i = 0; i < 52; i++) {
			switch(i / 13) {
			case 0:
				expect(Card.toSuitName(i)).toBe('spade');
				break;
			case 1:
				expect(Card.toSuitName(i)).toBe('club');
				break;
			case 2:
				expect(Card.toSuitName(i)).toBe('heart');
				break;
			case 3:
				expect(Card.toSuitName(i)).toBe('diamond');
				break;
			}
		}
	});
});

/*
describe('Card.toCenterString', () => {
	it('returns suit that would be on chat', () => {
		for (var i = 0; i < 52; i++) {
			if (i % 13 > 9) continue;
			//TODO
		}
	});
});
*/
