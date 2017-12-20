import React from 'react';
import { mount, shallow } from 'enzyme';

import Deck from './../Deck';

describe('Deck', () => {
	it('renders without crashing', () => {
		mount(<Deck />);
	});
	it('has default on click callback', () => {
		const wrapper = shallow(<Deck />);
		wrapper.find('.deck').simulate('click');
	});
	it('shows one hidden card when one card left in deck', () => {
		var wrapper = shallow(<Deck num_cards={1}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(1);

		wrapper = shallow(<Deck num_cards={1} top_card={0}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(2);
	});
	it('shows ten cards when deck is full or almost full', () => {
		var wrapper = shallow(<Deck num_cards={52}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(10);

		wrapper = shallow(<Deck num_cards={50}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(10);
	});
	it('shows empty cards when deck is empty', () => {
		const wrapper = mount(<Deck num_cards={0}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(1);
		expect(wrapper.find('.card-empty')).toHaveLength(1);
	});

});
