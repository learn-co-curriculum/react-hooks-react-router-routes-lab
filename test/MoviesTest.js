import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

// components
import Movies from '../src/Movies'

// data
import { movies } from '../src/data'


describe('<Movies />', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Movies />)
        expect(wrapper.type()).toBe('div')
    })

    it('should render one <h1 /> first, inside of the <div />', () => {
        const wrapper = shallow(<Movies />)
        expect(wrapper.children().first().type()).toBe('h1')
    })

    it("should render 'Movies Page' inside of the <h1 />", () => {
        const wrapper = shallow(<Movies />)
        expect(wrapper.children().first().text()).toContain('Movies Page')
    })

    it("should render a <div /> for each movie", () => {
        const wrapper = shallow(<Movies />)
        expect(wrapper.children().find('div').length).toBe(3)
    })

    it("should render the right content for each movie", () => {
        const wrapper = shallow(<Movies />)
        const movieContainers = wrapper.children().find('div')
        movieContainers.forEach((movie, i) => {
            expect(movie.text()).toContain(movies[i].title)
            expect(movie.text()).toContain(movies[i].time)
            movies[i].genres.forEach((genre) => {
                expect(movie.text()).toContain(genre)
            })
        })
    })
})
