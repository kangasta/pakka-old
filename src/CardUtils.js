class CardUtils {
	static suits = ['♠\uFE0E','♣\uFE0E','♥\uFE0E','♦\uFE0E'];
	static suit_letters = ['s','c','h','d'];
	static suit_names = ['spade','club','heart','diamond'];
	static nums = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
	static card_sizes = ['bridge', 'poker'];

	static isFaceCard(i, ace_is_face_card=false, ten_is_face_card=false) {
		var num_i = i % 13;
		return num_i > 9 ||
			(ace_is_face_card && num_i === 0) ||
			(ten_is_face_card && num_i === 9);
	}

	static toNumLetter(i, ten_as_10=true) {
		var num_i = i % 13;
		return ten_as_10 && num_i === 9 ? '10' : CardUtils.nums[num_i];
	}

	static toSuitLetter(i, ascii=false) {
		var suit_i = Math.round(i / 13 - 0.5);
		return !ascii ? CardUtils.suits[suit_i] : CardUtils.suit_letters[suit_i];
	}

	static toCardString(i, ascii=false, ten_as_10=true) {
		return CardUtils.toSuitLetter(i, ascii) + CardUtils.toNumLetter(i, ten_as_10);
	}

	static toSuitName(i) {
		return CardUtils.suit_names[Math.round(i / 13 - 0.5)];
	}
}

export default CardUtils;
