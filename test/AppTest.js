import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

// Components
import App from '../src/App'
import NavBar from '../src/NavBar'


describe('<App />', () => {
    it('should have .app class', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.hasClass('app')).toBe(true)
    })

    it('should contain a <NavBar /> component', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(NavBar).length).toBe(1)
    })
})
