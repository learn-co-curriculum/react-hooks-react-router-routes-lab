import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

// components
import Actors from '../src/Actors'

// data
import { actors } from '../src/data'


describe('<Actors />', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Actors />)
        expect(wrapper.type()).toBe('div')
    })

    it('should render one <h1 /> first, inside of the <div />', () => {
        const wrapper = shallow(<Actors />)
        expect(wrapper.children().first().type()).toBe('h1')
    })

    it("should render 'Actors Page' inside of the <h1 />", () => {
        const wrapper = shallow(<Actors />)
        expect(wrapper.children().first().text()).toContain('Actors Page')
    })

    it("should render a <div /> for each actor", () => {
        const wrapper = shallow(<Actors />)
        expect(wrapper.children().find('div').length).toBe(4)
    })

    it("should render the right content for each actor", () => {
        const wrapper = shallow(<Actors />)
        const actorContainers = wrapper.children().find('div')
        actorContainers.forEach((actor, i) => {
            expect(actor.text()).toContain(actors[i].name)
            actors[i].movies.forEach((movie) => {
                expect(actor.text()).toContain(movie)
            })
        })
    })
})
