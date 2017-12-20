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
	it('shows one shadow card when one card left in deck', () => {
		var wrapper = shallow(<Deck num_cards={1}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(1);

		wrapper = shallow(<Deck num_cards={1} top_card={0}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(2);
	});
	it('shows equal amount of shadow cards than there is cards in the deck', () => {
		var wrapper = shallow(<Deck num_cards={52}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(52);

		wrapper = shallow(<Deck num_cards={26}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(26);
	});
	it('shows empty card when deck is empty', () => {
		const wrapper = mount(<Deck num_cards={0}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(1);
		expect(wrapper.find('.card-empty')).toHaveLength(1);
	});

});
