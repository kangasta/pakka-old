import React from 'react';
import ReactDOM from 'react-dom';

import Deck from './../Deck';

describe('Deck', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Deck />, div);
	});
});


