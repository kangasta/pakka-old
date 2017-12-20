import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import DeckUtils from './DeckUtils';
//import Deck from './Deck';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'card_number': -1,
			'cards_left': 52
		};

		this.deck = new DeckUtils();

		this.resetDeck = this.resetDeck.bind(this);
		this.updateCard = this.updateCard.bind(this);
	}

	resetDeck() {
		this.deck.resetDeck();
		this.setState({'card_number': -1,'cards_left':this.deck.cardsLeft()});
	}

	updateCard() {
		if (this.state.card_number === -2) {
			this.resetDeck();
			return;
		}
		if (!this.deck.cardsLeft()) {
			this.setState({'card_number': -2,'cards_left':0});
			return;
		}
		this.setState({
			'card_number': this.deck.drawCard(),
			'cards_left':this.deck.cardsLeft()
		});
	}

	render() {
		return (
			<div className='App'>
				<div className='app-center-container'>
					<div className='app-card-container app-horizontally-center'>
						<Card size='poker' number={this.state.card_number} fourcolor={true} onClickCallback={this.updateCard}/>
					</div>
				</div>
			</div>
		);
		/*
		<br/>
		<div className='app-deck-container app-horizontally-center'>
			<Deck size='poker' />
		</div>
		*/
	}
}

export default App;
