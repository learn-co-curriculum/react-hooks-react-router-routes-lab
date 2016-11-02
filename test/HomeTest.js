import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

// components
import Home from '../src/components/Home'


describe('<Home />', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.type()).toBe('div')
    })

    it('should only render one <h1 /> inside of the <div />', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.children().first().type()).toBe('h1')
    })

    it("should render 'Home Page' inside of the <h1 />", () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.children().first().text()).toContain('Home Page')
    })
})
