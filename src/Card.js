import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardUtils from './CardUtils';

import './Card.css';

class Card extends Component {
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
			<div className={'card' +
							' card-size-' + (CardUtils.card_sizes.indexOf(this.props.size) !== -1 ? this.props.size : 'poker' ) +
							' card-suit-' + CardUtils.toSuitName(this.props.number) +
							' card-deck-' + (this.props.fourcolor ? 'fourcolor' : 'standard') +
							' card-' + this.getVisibilityStyle() +
							' ' + (CardUtils.isFaceCard(this.props.number) ? 'card-style-face' : 'card-style-number')
			} onClick={()=>{this.props.onClickCallback();}}>
				<div className='card-label card-label-top card-label-left'>
					{CardUtils.toNumLetter(this.props.number)}<br/>
					{CardUtils.toSuitLetter(this.props.number)}
				</div>
				<div className='card-label card-label-bottom card-label-right'>
					{CardUtils.toNumLetter(this.props.number)}<br/>
					{CardUtils.toSuitLetter(this.props.number)}
				</div>
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
