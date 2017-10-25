import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

import './Deck.css';


class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'num_cards': 52*this.props.num_decks
		};
	}

	popCard() {
		this.setState({'num_cards': this.state.num_cards > 0
			? this.state.num_cards - 1
			: this.state.num_cards});
	}

	getDeckDepth() {
		if (!this.state.num_cards) return 0;
		var depth = Math.round((this.state.num_cards + 13) / 10);
		return depth > 6 ? 6 : depth;
	}

	render() {
		return (
			<div className={'deck-boundary'} onClick={() => {this.popCard();}}>
				{
					Array(this.getDeckDepth())
						.fill('1em')
						.map((cur, i) => {
							var to_center = this.props.size === 'poker' ? 0.25 : 0.5;

							return (
								// eslint-disable-next-line
								<div key={i.toString()}
									className='deck-card-holder'
									style={{
										position: 'absolute',
										transform: 'translate(' + (to_center + i/10) + 'em, ' + (to_center + i/10) + 'em)'
									}}>
									<Card size={this.props.size}
										minimalstyle={this.props.minimalstyle}
										fourcolor={this.props.fourcolor}
										hidden={true} />
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
	num_decks: 1,
	minimalstyle: true,
	fourcolor: false
};

Deck.propTypes = {
	size: PropTypes.string,
	num_decks: PropTypes.number,
	minimalstyle: PropTypes.bool,
	fourcolor: PropTypes.bool
};

export default Deck;
