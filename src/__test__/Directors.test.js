import React from 'react'
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Directors from '../components/Directors';
import { directors } from '../data'

Enzyme.configure({ adapter: new Adapter() })

describe('Directors', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Directors />);
  });

  it('should only render one <h1 />', () => {
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });

  it("should render 'Directors Page' inside of the <h1 />", () => {
    expect(wrapper.find('h1').first().text()).to.contain('Directors Page');
  });

  it("should render a <div /> for each director", () => {
    expect(wrapper.children().find('div').length).to.equal(3);
  });

  it("should render the right content for each director in a  <div />", () => {
    const directorContainers = wrapper.children().find('div');
    expect(directorContainers.length).to.equal(3);
    directorContainers.forEach((director, i) => {
      expect(director.text()).to.contain(directors[i].name);
    });
  });

  it("should use the director name as a key for each child <div />", () => {
    const directorContainers = wrapper.children().find('div');
    directorContainers.forEach((director, i) => {
      expect(director.key()).to.contain(directors[i].name);
    });
  });

  it("should render a <li /> for each movie", () => {
    const directorContainers = wrapper.children().find('div');
    directorContainers.forEach((director, i) => {
      const movieContainers = director.find('li');
      movieContainers.forEach((movie, j) => {
        expect(movie.text()).to.contain(directors[i].movies[j]);
      });
    });
  });

  it("should use the movie titles as keys for each child <li />", () => {
    const directorContainers = wrapper.children().find('div');
    directorContainers.forEach((director, i) => {
      const movieContainers = director.find('li');
      movieContainers.forEach((movie, j) => {
        expect(movie.key()).to.contain(directors[i].movies[j]);
      });
    });
  });
});
