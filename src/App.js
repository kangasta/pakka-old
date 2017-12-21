import React, { Component } from 'react';
import './App.css';
//import Card from './Card';
import DeckUtils from './DeckUtils';
import Deck from './Deck';

class App extends Component {
	constructor(props) {
		super(props);

		this.deck = new DeckUtils();
		this.has_separate_deck = false;

		this.state = {
			'card_number': (this.has_separate_deck ? -2 : -1),
			'cards_left': 52
		};

		this.resetDeck = this.resetDeck.bind(this);
		this.updateCard = this.updateCard.bind(this);
	}

	resetDeck() {
		this.deck.resetDeck();
		this.setState({'card_number': (this.has_separate_deck ? -2 : -1),'cards_left':this.deck.cardsLeft()});
	}

	updateCard() {
		if ((this.state.card_number === -2 && !this.has_separate_deck) || (!this.deck.cardsLeft() && this.has_separate_deck)) {
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

	componentDidMount() {
		window.scrollTo(0,1);
	}

	render() {
		return (
			<div className='app'>
				<div className='app-center-container'>
					<div className='app-deck-container app-horizontally-center'>
						<Deck
							size='poker'
							fourcolor={false}
							top_card={this.state.card_number}
							num_cards={this.state.cards_left}
							onClickCallback={this.updateCard}
						/>
					</div>
				</div>
			</div>
		);
		/*
		<div className='app-deck-container app-horizontally-center'>
			<Deck
				size='poker' fourcolor={true}
				top_card={this.state.card_number}
				num_cards={this.state.cards_left}
				onClickCallback={this.updateCard}
			/>
		</div>
		<div className='app-card-container app-horizontally-center'>
			<Card size='poker' number={this.state.card_number} fourcolor={true} onClickCallback={this.updateCard}/>
		</div>
		*/
	}
}

export default App;
