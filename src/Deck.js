import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

import './Deck.css';


class Deck extends Component {
	getCardNumber(is_shadow) {
		return (
			(this.props.num_cards || this.props.top_card >= 0)
				? (is_shadow ? Card.CARD_SHADOW : this.props.top_card)
				: Card.CARD_EMPTY);
	}

	getTranslate(i) {
		return 'translate(' +
			(0.5*i/(this.props.num_decks*52)) + 'em , ' +
			(1.0*i/(this.props.num_decks*52)) + 'em)';
	}

	render() {
		return (
			<div className={'deck'} onClick={() => {this.props.onClickCallback();}}>
				{
					Array((this.props.top_card >= 0 ? this.props.num_cards + 1 : this.props.num_cards) || 1)
						.fill('1em')
						.map((cur, i) => {
							return (
								<div key={i}
									className='deck-element'
									style={{
										zIndex: -i,
										left: 0,
										top: 0,
										position: 'absolute',
										transform: this.getTranslate(i)
									}}>
									<Card size={this.props.size}
										fourcolor={this.props.fourcolor}
										number={this.getCardNumber(i)} />
								</div>
							);
						})
				}
			</div>
		);
	}
}

Deck.defaultProps = {
	size: 'poker',
	num_cards: 52,
	num_decks: 1,
	top_card: -1,
	fourcolor: false,
	onClickCallback: ()=>true
};

Deck.propTypes = {
	size: PropTypes.string,
	num_cards: PropTypes.number,
	num_decks: PropTypes.number,
	top_card: PropTypes.number,
	fourcolor: PropTypes.bool,
	onClickCallback: PropTypes.func
};

export default Deck;
