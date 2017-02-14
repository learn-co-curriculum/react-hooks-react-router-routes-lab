import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// components
import Movies from '../src/components/Movies';

// data
import { movies } from '../src/data';


describe('<Movies />', () => {
 
  it('should render one <h1 /> first, inside of the <div />', () => {
    const wrapper = shallow(<Movies />);
    expect(wrapper.children().first().type()).to.equal('h1');
  });

  it("should render 'Movies Page' inside of the <h1 />", () => {
    const wrapper = shallow(<Movies />);
    expect(wrapper.children().first().text()).to.contain('Movies Page');
  });

  it("should render a <div /> for each movie", () => {
    const wrapper = shallow(<Movies />);
    expect(wrapper.children().find('div').length).to.equal(3);
  });

  it("should render the right content for each movie", () => {
    const wrapper = shallow(<Movies />);
    const movieContainers = wrapper.children().find('div');
    expect(movieContainers.length).to.equal(3);
    movieContainers.forEach((movie, i) => {
      expect(movie.text()).to.contain(movies[i].title);
      expect(movie.text()).to.contain(movies[i].time);
      movies[i].genres.forEach((genre) => {
        expect(movie.text()).to.contain(genre);
      });
    });
  });
});
