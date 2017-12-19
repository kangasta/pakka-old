import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';


class Card extends Component {
	static suits = ['♠','♣','♥','♦'];
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
		return ten_as_10 && num_i === 9 ? '10' : Card.nums[num_i];
	}

	static toSuitLetter(i, ascii=false) {
		var suit_i = Math.round(i / 13 - 0.5);
		return !ascii ? Card.suits[suit_i] : Card.suit_letters[suit_i];
	}

	static toCardString(i, ascii=false, ten_as_10=true) {
		return Card.toSuitLetter(i, ascii) + Card.toNumLetter(i, ten_as_10);
	}

	static toSuitName(i) {
		return Card.suit_names[Math.round(i / 13 - 0.5)];
	}

	static toCenterString(i) {
		var num_i = i % 13;
		var centerStringPositionArr = ['1','11','111','202','212','222','232','323','333','2332','JACK','QUEEN','KING'];
		if (num_i < 0) {
			return 'NONE';
		}
		if (num_i > 9) {
			return centerStringPositionArr[num_i];
		}
		var ret_str = '';
		for (var j = 0; j < centerStringPositionArr[num_i].length; j++) {
			for (var k = 0; k < centerStringPositionArr[num_i][j]; k++) {
				ret_str += (k === 0 ? '' : ' ') + Card.toSuitLetter(i);
			}
			ret_str += '\n';
		}
		return ret_str;
	}

	getVisibilityStyle() {
		switch (this.props.number) {
		case -1:
			return 'hidden';
		case -2:
			return 'empty';
		default:
			return 'visible';
		}
	}


	render() {
		return (
			<div className={'card-boundary' +
							' card-size-' + (Card.card_sizes.indexOf(this.props.size) !== -1 ? this.props.size : 'poker' ) +
							' card-suit-' + Card.toSuitName(this.props.number) +
							' card-deck-' + (this.props.fourcolor ? 'fourcolor' : 'standard') +
							' card-' + this.getVisibilityStyle() +
							' ' + (Card.isFaceCard(this.props.number) ? 'card-style-face' : 'card-style-number')
			} onClick={()=>{this.props.onClickCallback();}}>
				<div className='card-label card-label-top card-label-left'>
					{Card.toNumLetter(this.props.number)}<br/>
					{Card.toSuitLetter(this.props.number)}
				</div>
				<div className='card-label card-label-bottom card-label-right'>
					{Card.toNumLetter(this.props.number)}<br/>
					{Card.toSuitLetter(this.props.number)}
				</div>
				<div className='card-center'>
					<div className='card-center-graphics'>{Card.toCenterString(this.props.number)}</div>
				</div>
			</div>
		);
	}
}

Card.defaultProps = {
	size: 'poker',
	number: 0,
	fourcolor: false,
	onClickCallback: ()=>true
};

Card.propTypes = {
	size: PropTypes.string,
	number: PropTypes.number,
	fourcolor: PropTypes.bool,
	onClickCallback: PropTypes.func
};

export default Card;
