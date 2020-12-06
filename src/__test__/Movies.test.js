import React from 'react'
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Movies from '../components/Movies';
import { movies } from '../data';

Enzyme.configure({ adapter: new Adapter() })

describe('Movies', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Movies />);
  })
  
  it('should only render one <h1 />', () => {
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });

  it("should render 'Movies Page' inside of the <h1 />", () => {
    expect(wrapper.find('h1').first().text()).to.contain('Movies Page');
  });

  it("should render a <div /> for each movie", () => {
    expect(wrapper.children().find('div').length).to.equal(3);
  });

  it("should render the right content for each movie in a  <div />", () => {
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

  it("should use the movie title as a key for each child <div />", () => {
    const movieContainers = wrapper.children().find('div');
    movieContainers.forEach((movie, i) => {
      expect(movie.key()).to.contain(movies[i].title);
    });
  });

  it("should render a <li /> for each genre", () => {
    const movieContainers = wrapper.children().find('div');
    movieContainers.forEach((movie, i) => {
      const genreContainers = movie.find('li');
      genreContainers.forEach((genre, j) => {
        expect(genre.text()).to.contain(movies[i].genres[j]);
      });
    });
  });

  it("should use the movie genres as keys for each child <li />", () => {
    const movieContainers = wrapper.children().find('div');
    movieContainers.forEach((movie, i) => {
      const genreContainers = movie.find('li');
      genreContainers.forEach((genre, j) => {
        expect(genre.key()).to.contain(movies[i].genres[j]);
      });
    });
  });

});
