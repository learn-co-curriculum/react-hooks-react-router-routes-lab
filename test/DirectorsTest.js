import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

// components
import Directors from '../src/components/Directors'

// data
import { directors } from '../src/data'


describe('<Directors />', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Directors />)
        expect(wrapper.type()).toBe('div')
    })

    it('should render one <h1 /> first, inside of the <div />', () => {
        const wrapper = shallow(<Directors />)
        expect(wrapper.children().first().type()).toBe('h1')
    })

    it("should render 'Directors Page' inside of the <h1 />", () => {
        const wrapper = shallow(<Directors />)
        expect(wrapper.children().first().text()).toContain('Directors Page')
    })

    it("should render a <div /> for each director", () => {
        const wrapper = shallow(<Directors />)
        expect(wrapper.children().find('div').length).toBe(3)
    })

    it("should render the right content for each director", () => {
        const wrapper = shallow(<Directors />)
        const directorContainers = wrapper.children().find('div')
        directorContainers.forEach((director, i) => {
            expect(director.text()).toContain(directors[i].name)
            directors[i].movies.forEach((movie) => {
                expect(director.text()).toContain(movie)
            })
        })
    })
})
