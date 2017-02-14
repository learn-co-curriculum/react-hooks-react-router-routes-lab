import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai';
import { shallow } from 'enzyme'

// components
import Actors from '../src/components/Actors'

// data
import { actors } from '../src/data'


describe('<Actors />', () => {

  it('should render one <h1 />, inside of a <div />', () => {
    const wrapper = shallow(<Actors />);
    expect(wrapper.children().first().type()).to.equal('h1');
  });

  it("should render 'Actors Page' inside of the <h1 />", () => {
    const wrapper = shallow(<Actors />);
    expect(wrapper.children().first().text()).to.contain('Actors Page');
  });

  it("should render a <div /> for each actor", () => {
    const wrapper = shallow(<Actors />);
    expect(wrapper.children().find('div').length).to.equal(4);
  });

  it("should render the right content for each actor with a className of 'actor'", () => {
    const wrapper = shallow(<Actors />);
    const actorContainers = wrapper.children().find('div');
    expect(actorContainers.length).to.equal(4);
    actorContainers.forEach((node, i) => {
        expect(node.html()).to.contain(actors[i].name);
        actors[i].movies.forEach((movie) => {
            expect(node.html()).to.contain(movie);
        });
    });
  });
});
