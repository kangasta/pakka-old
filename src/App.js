import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Deck from './Deck';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: 'null',
		};

		const self = this;
		if(typeof(EventSource) !== 'undefined') {
			var source = new EventSource('http://localhost:8080/events/');
			source.onmessage = function(msg) {
				//console.log(self.toCardString(msg.data, true));
				self.setState({data: msg.data});
			};
		} else {
			this.state = {data: 'error: No event source support.'};
		}
	}

	render() {
		return (
			<div className='App'>
				<div className='app-center-container'>
					<div className='app-deck-container app-horizontally-center'>
						<Deck size='poker' />
					</div>
					<br/>
					<div className='app-card-container app-horizontally-center'>
						<Card size='poker' number={12} fourcolor={true}/>
					</div>
				</div>
				{/*<h1>sse-test</h1>
				<h2>card</h2>
				<h3>standard deck</h3>
				<p className={'card-suit-' + this.toSuitName(this.state.data) + ' card-deck-standard'}>{this.toCardString(this.state.data)}</p>
				<h3>fourcolor deck</h3>
				<p className={'card-suit-' + this.toSuitName(this.state.data) + ' card-deck-fourcolor'}>{this.toCardString(this.state.data)}</p>
				<h2>Card</h2>
				<h3>standard deck</h3>
				<Card size='poker' number={0}/>
				<Card size='poker' number={18}/>
				<Card size='poker' number={38}/>
				<Card size='poker' number={45}/>
				<Card size='poker' hidden={true}/>
				<Card size='poker' number={-1}/>
				<h3>fourcolor deck</h3>
				<Card size='poker' number={0} fourcolor={true}/>
				<Card size='poker' number={18} fourcolor={true}/>
				<Card size='poker' number={38} fourcolor={true}/>
				<Card size='poker' number={45} fourcolor={true}/>
				<Card size='poker' hidden={true} fourcolor={true}/>
				<Card size='poker' number={-1} fourcolor={true}/>
				<h3>all values</h3>
				<Card size='poker' number={0} fourcolor={true}/>
				<Card size='poker' number={1} fourcolor={true}/>
				<Card size='poker' number={2} fourcolor={true}/>
				<Card size='poker' number={3} fourcolor={true}/>
				<Card size='poker' number={4} fourcolor={true}/>
				<Card size='poker' number={5} fourcolor={true}/>
				<Card size='poker' number={6} fourcolor={true}/>
				<Card size='poker' number={7} fourcolor={true}/>
				<Card size='poker' number={8} fourcolor={true}/>
				<Card size='poker' number={9} fourcolor={true}/>
				<Card size='poker' number={10} fourcolor={true}/>
				<Card size='poker' number={11} fourcolor={true}/>
				<Card size='poker' number={12} fourcolor={true}/>
				<h2>Deck</h2>
				<Deck />*/}
			</div>
		);
	}
}

export default App;
