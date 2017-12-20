import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardUtils from './CardUtils';

import './Card.css';

class Card extends Component {
	static CARD_HIDDEN = -1;
	static CARD_EMPTY = -2;
	static CARD_SHADOW = -3;

	getVisibilityStyle() {
		switch (this.props.number) {
		case Card.CARD_HIDDEN:
			return 'hidden';
		case Card.CARD_EMPTY:
			return 'empty';
		case Card.CARD_SHADOW:
			return 'shadow';
		default:
			return 'visible';
		}
	}

	getClasses() {
		return (
			' card-size-' + (CardUtils.card_sizes.indexOf(this.props.size) !== -1 ? this.props.size : 'poker' ) +
			' card-suit-' + CardUtils.toSuitName(this.props.number) +
			' card-deck-' + (this.props.fourcolor ? 'fourcolor' : 'standard') +
			' card-' + this.getVisibilityStyle() +
			' card-style-' + (CardUtils.isFaceCard(this.props.number) ? 'face' : 'number')
		);
	}

	render() {
		return (
			<div className={'card' + this.getClasses()
			} onClick={()=>{this.props.onClickCallback();}}>
				{[
					'card-label-top card-label-left',
					'card-label-bottom card-label-right'
				].map((a,i) =>
					<div key={i} className={'card-label ' + a}>
						{CardUtils.toNumLetter(this.props.number)}<br/>
						{CardUtils.toSuitLetter(this.props.number)}
					</div>
				)}
				<div className='card-center'>
					<div className='card-center-graphics'>
						{/* TODO */}
					</div>
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
