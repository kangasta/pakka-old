import React from 'react';
import { mount } from 'enzyme';

import Deck from './../Deck';

describe('Deck', () => {
	it('renders without crashing', () => {
		mount(<Deck />);
	});
});
