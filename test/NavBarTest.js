import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

// Components
import NavBar from '../src/components/NavBar'
import { Link } from 'react-router'


describe('<NavBar />', () => {
    // beforeEach(() => {
    //     const wrapper = shallow(<NavBar />)
    // })

    it('should have .navbar class', () => {
        const wrapper = shallow(<NavBar />)
        expect(wrapper.hasClass('navbar')).toBe(true)
    })

    it('should render a <ul />', () => {
        const wrapper = shallow(<NavBar />)
        expect(wrapper.children().first().type()).toBe('ul')
    })

    it('should render 4 <li />', () => {
        const wrapper = shallow(<NavBar />)
        expect(wrapper.children().first().children().first().type()).toBe('li')
        expect(wrapper.children().first().children().length).toBe(4)
    })

    it('should render a <Link /> in each <Li />', () => {
        const wrapper = shallow(<NavBar />)
        const listItems = wrapper.children().first().children()
        listItems.forEach((li) => {
            expect(li.children().first().type()).toBe(Link)
        })
    })

    it('should contain <Links />, in this order, for Home, Movies, Directors and Actors', () => {
        const wrapper = shallow(<NavBar />)
        const linkNames = ['Home', 'Movies', 'Directors', 'Actors']
        const listItems = wrapper.children().first().children()
        listItems.forEach((li, i) => {
            expect(li.children().first().children().first().text()).toBe(linkNames[i])
        })
    })
})
