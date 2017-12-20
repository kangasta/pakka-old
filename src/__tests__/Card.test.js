import React from 'react';
import { mount, shallow } from 'enzyme';

import Card from './../Card';

describe('Card', () => {
	it('renders without crashing', () => {
		mount(<Card />);
	});
	it('has default on click callback', () => {
		const wrapper = shallow(<Card />);
		wrapper.find('.card').simulate('click');
	});
	it('allows empty, hidden, shadow, and visible states', ()=>{
		const state = ['shadow', 'empty', 'hidden', 'visible'];
		for (var i = -3; i < 1; i++) {
			const wrapper = mount(<Card number={i}/>);
			expect(wrapper.find('.card-' + state[i + 3]).exists()).toBe(true);
		}
	});
	it('has standard and four color options',()=>{
		const colors = ['standard', 'fourcolor'];
		for (var i = 0; i < 2; i++) {
			const wrapper = mount(<Card fourcolor={!!i}/>);
			expect(wrapper.find('.card-deck-' + colors[i]).exists()).toBe(true);
		}
	});
	it('has poker and bridge sizes',()=>{
		const sizes = ['poker', 'bridge', 'cat'];
		for (var i = 0; i < 3; i++) {
			const wrapper = mount(<Card size={sizes[i]}/>);
			expect(wrapper.find('.card-size-' + sizes[i % 2]).exists()).toBe(true);
		}
	});
	it('has different number and face styles',()=>{
		for (var i = 0; i < 13; i++) {
			const wrapper = mount(<Card number={i}/>);
			expect(wrapper.find('.card-style-' + ((i % 13) > 9 ? 'face' : 'number')).exists()).toBe(true);
		}
	});
});
