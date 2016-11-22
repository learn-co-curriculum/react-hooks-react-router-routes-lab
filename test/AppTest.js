import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'

// Components
import App from '../src/components/App'
import NavBar from '../src/components/NavBar'


describe('<App />', () => {
    it('should contain a <NavBar /> component', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(NavBar).length).toBe(1)
    })

    it('should render prop children', () => {
        const wrapper = shallow(<App><div className="div"> I am the child prop</div></App>)
        expect(wrapper.find('.div').text()).toContain('I am the child prop')
    })
})
