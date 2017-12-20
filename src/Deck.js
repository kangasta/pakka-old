import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

import './Deck.css';


class Deck extends Component {
	getDeckDepth(max=10) {
		if (this.props.num_cards === 1 && this.props.top_card >= 0)
			return 2;
		if (this.props.num_cards <= 1)
			return 1;
		var depth = Math.round((this.props.num_cards) / (this.props.num_decks * 52) * (max - 1) + 0.5) + 1;
		return depth > max ? max : depth;
	}

	getCardNumber(is_hidden) {
		return (this.props.num_cards || this.props.top_card >= 0) ? (is_hidden ? -1 : this.props.top_card) : -2;
	}

	render() {
		return (
			<div className={'deck'} onClick={() => {this.props.onClickCallback();}}>
				{
					Array(this.getDeckDepth())
						.fill('1em')
						.map((cur, i) => {
							return (
								// eslint-disable-next-line
								<div key={i}
									className='deck-element'
									style={{
										zIndex: -i,
										left: 0,
										top: 0,
										position: 'absolute',
										transform: 'translate(' + (i/10) + 'em, ' + (i/10) + 'em)'
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
