import React from 'react'
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Actors from '../components/Actors'
import { actors } from '../data'

Enzyme.configure({ adapter: new Adapter() })

describe('Actors', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Actors />);
  })

  it('should only render one <h1 />', () => {
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });

  it("should render 'Actors Page' inside of the <h1 />", () => {
    expect(wrapper.find('h1').first().text()).to.contain('Actors Page');
  });

  it("should render a <div /> for each actor", () => {
    expect(wrapper.children().find('div').length).to.equal(4);
  });

  it("should render the right content for each actor in a  <div />", () => {
    const actorContainers = wrapper.children().find('div');
    expect(actorContainers.length).to.equal(4);
    actorContainers.forEach((actor, i) => {
      expect(actor.text()).to.contain(actors[i].name);
    });
  });

  it("should use the actor name as a key for each child <div />", () => {
    const actorContainers = wrapper.children().find('div');
    actorContainers.forEach((actor, i) => {
      expect(actor.key()).to.contain(actors[i].name);
    });
  });

  it("should render a <li /> for each movie", () => {
    const actorContainers = wrapper.children().find('div');
    actorContainers.forEach((actor, i) => {
      const movieContainers = actor.find('li');
      movieContainers.forEach((movie, j) => {
        expect(movie.text()).to.contain(actors[i].movies[j]);
      });
    });
  });

  it("should use the movie titles as keys for each child <li />", () => {
    const actorContainers = wrapper.children().find('div');
    actorContainers.forEach((actor, i) => {
      const movieContainers = actor.find('li');
      movieContainers.forEach((movie, j) => {
        expect(movie.key()).to.contain(actors[i].movies[j]);
      });
    });
  });
});
