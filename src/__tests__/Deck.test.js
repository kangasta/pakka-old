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
	it('shows one visible card when defined', () => {
		const wrapper = mount(<Deck num_cards={1} top_card={0}/>);
		expect(wrapper.find('.card-visible')).toHaveLength(1);
	});
	it('shows always 20 deck elements', () => {
		var wrapper = shallow(<Deck num_cards={52}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(20);

		wrapper = shallow(<Deck num_cards={26}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(20);
	});
	it('shows empty cards when deck is empty', () => {
		const wrapper = mount(<Deck num_cards={0}/>);
		expect(wrapper.find('.deck-element')).toHaveLength(20);
		expect(wrapper.find('.card-empty')).toHaveLength(20);
	});

});
