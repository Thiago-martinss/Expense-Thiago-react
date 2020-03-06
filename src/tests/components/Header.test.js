import React from 'react'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header'

test('Deve renderizar o Header corretamente', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    //expect(wrapper.find('h1'))
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})