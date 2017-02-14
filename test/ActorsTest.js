import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'
import pry from 'pryjs';

// components
import Actors from '../src/components/Actors'

// data
import { actors } from '../src/data'


describe('<Actors />', () => {

    it('should render one <h1 />, inside of a <div />', () => {
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

    it("should render the right content for each actor with a className of 'actor'", () => {
        const wrapper = mount(<Actors />);
        const actorContainers = wrapper.children().find('div')
        expect(actorContainers.length).toBe(4);
        actorContainers.forEach((node, i) => {
            expect(node.html()).toContain(actors[i].name)
            actors[i].movies.forEach((movie) => {
                expect(node.html()).toContain(movie)
            })
        })
    })
})
