import CardUtils from './../CardUtils';

describe('CardUtils.isFaceCard', () => {
	it('returns always true for J, Q, and K', () => {
		expect(CardUtils.isFaceCard(10+13)).toBeTruthy();
		expect(CardUtils.isFaceCard(11+13*2)).toBeTruthy();
		expect(CardUtils.isFaceCard(11+13*3)).toBeTruthy();
	});
	it('returns always false for 2 to 9', () => {
		for (var i = 1; i < 9; i++) {
			expect(CardUtils.isFaceCard(i+i*13)).toBeFalsy();
			expect(CardUtils.isFaceCard(i+i*13,true,true)).toBeFalsy();
		}
	});
	it('returns true for T when set to', () => {
		expect(CardUtils.isFaceCard(9+13)).toBeFalsy();
		expect(CardUtils.isFaceCard(9+2*13, false, true)).toBeTruthy();
	});
	it('returns true for A when set to', () => {
		expect(CardUtils.isFaceCard(0+13)).toBeFalsy();
		expect(CardUtils.isFaceCard(0+2*13, true, false)).toBeTruthy();
	});
});

describe('CardUtils.toNumLetter', () => {
	it('returns number that would be on card', () => {
		for (var i = 0; i < 52; i++) {
			switch(i % 13) {
			case 0:
				expect(CardUtils.toNumLetter(i)).toBe('A');
				break;
			case 9:
				expect(CardUtils.toNumLetter(i)).toBe('10');
				expect(CardUtils.toNumLetter(i, false)).toBe('T');
				break;
			case 10:
				expect(CardUtils.toNumLetter(i)).toBe('J');
				break;
			case 11:
				expect(CardUtils.toNumLetter(i)).toBe('Q');
				break;
			case 12:
				expect(CardUtils.toNumLetter(i)).toBe('K');
				break;
			default:
				expect(CardUtils.toNumLetter(i)).toBe((i % 13 + 1).toString());
				break;
			}
		}
	});
});

describe('CardUtils.toSuitLetter', () => {
	it('returns suit that would be on card', () => {
		for (var i = 0; i < 52; i++) {
			switch(i / 13) {
			case 0:
				expect(CardUtils.toSuitLetter(i)).toBe('♠');
				expect(CardUtils.toSuitLetter(i,true)).toBe('s');
				break;
			case 1:
				expect(CardUtils.toSuitLetter(i)).toBe('♣');
				expect(CardUtils.toSuitLetter(i,true)).toBe('c');
				break;
			case 2:
				expect(CardUtils.toSuitLetter(i)).toBe('♥');
				expect(CardUtils.toSuitLetter(i,true)).toBe('h');
				break;
			case 3:
				expect(CardUtils.toSuitLetter(i)).toBe('♦');
				expect(CardUtils.toSuitLetter(i,true)).toBe('d');
				break;
			}
		}
	});
});

describe('CardUtils.toCardString', () => {
	it('returns card log string', () => {
		for (var i = 0; i < 52; i++) {
			expect(CardUtils.toCardString(i, true, true)).toHaveLength(i%13 === 9 ? 3 : 2);
			expect(CardUtils.toCardString(i, true, false)).toHaveLength(2);
			expect(CardUtils.toCardString(i)).toHaveLength(i%13 === 9 ? 3 : 2);
			expect(CardUtils.toCardString(i, false, false)).toHaveLength(2);
		}
	});
});

describe('CardUtils.toSuitName', () => {
	it('returns suit that would be on chat', () => {
		for (var i = 0; i < 52; i++) {
			switch(i / 13) {
			case 0:
				expect(CardUtils.toSuitName(i)).toBe('spade');
				break;
			case 1:
				expect(CardUtils.toSuitName(i)).toBe('club');
				break;
			case 2:
				expect(CardUtils.toSuitName(i)).toBe('heart');
				break;
			case 3:
				expect(CardUtils.toSuitName(i)).toBe('diamond');
				break;
			}
		}
	});
});
