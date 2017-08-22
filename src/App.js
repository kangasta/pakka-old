import React, { Component } from 'react';
import './App.css';

class App extends Component {
	suits = ["♠","♣","♥","♦"];
	suit_letters = ["s","c","h","d"];
	suit_names = ["spade","club","heart","diamond"];
	nums = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"];

	constructor() {
		super();
		this.state = {
			data: "null",
		};

		const self = this;
		if(typeof(EventSource) !== "undefined") {
			var source = new EventSource("http://localhost:8080/events/");
			source.onmessage = function(msg) {
				console.log(self.toCardString(msg.data, true));
				self.setState({data: msg.data});
			};
		} else {
			this.setState({data: "error: No event source support."});
		}
	}

	toNumLetter(i, ten_as_10=true) {
		var num_i = i % 13;
		return ten_as_10 && num_i === 9 ? "10" : this.nums[num_i];
	}

	toSuitLetter(i, ascii=false) {
		var suit_i = Math.round(i / 13 - 0.5);
		return !ascii ? this.suits[suit_i] : this.suit_letters[suit_i];
	}

	toCardString(i, ascii=false, ten_as_10=true) {
		return this.toSuitLetter(i, ascii) + this.toNumLetter(i, ten_as_10);
	}

	toSuitName(i) {
		return this.suit_names[Math.round(i / 13 - 0.5)];
	}

	render() {
		return (
			<div className="App">
				<h1>sse-test</h1>
				<h2>card</h2>
				<h3>standard deck</h3>
				<p className={"card-suit-" + this.toSuitName(this.state.data) + " card-deck-standard"}>{this.toCardString(this.state.data)}</p>
				<h3>fourcolor deck</h3>
				<p className={"card-suit-" + this.toSuitName(this.state.data) + " card-deck-fourcolor"}>{this.toCardString(this.state.data)}</p>
			</div>
		);
	}
}

export default App;
