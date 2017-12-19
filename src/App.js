import React, { Component } from 'react';
import './App.css';
import Card from './Card';
//import Deck from './Deck';

class App extends Component {
	cards = [];

	constructor(props) {
		super(props);
		this.state = {
			'card_number': -1,
			'cards_left': 52
		};

		this.initDeck();
		this.resetDeck = this.resetDeck.bind(this);
		this.updateCard = this.updateCard.bind(this);
	}

	// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
	static shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
	}

	initDeck() {
		for (var i = 0; i < 52; i++) {
			this.cards.push(i);
		}
		App.shuffle(this.cards);
	}

	resetDeck() {
		this.initDeck();
		this.setState({'card_number': -1,'cards_left':52});
	}

	updateCard() {
		if (this.state.card_number === -2) {
			this.resetDeck();
			return;
		}
		if (!this.cards.length) {
			this.setState({'card_number': -2,'cards_left':0});
			return;
		}
		this.setState({
			'card_number': this.cards.pop(),
			'cards_left':this.cards.length
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
