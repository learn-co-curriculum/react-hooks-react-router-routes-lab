import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { Link } from 'react-router'

import App from '../src/App'
import NavBar from '../src/NavBar'

describe('components', () => {

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

    describe('<NavBar />', () => {
        it('should have .navbar class', () => {
            const wrapper = shallow(<NavBar />)
            expect(wrapper.hasClass('navbar')).toBe(true)
        })

        it('should contain 4 <Link /> components', () => {
            const wrapper = shallow(<NavBar />)
            expect(wrapper.find(Link).length).toBe(4)
        })
    })
})
