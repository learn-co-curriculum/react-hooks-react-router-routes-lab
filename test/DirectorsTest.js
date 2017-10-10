import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// components
import Directors from '../src/components/Directors'

// data
import { directors } from '../src/data'

describe('Directors', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Directors />);
  })

  it('should render one <h1 /> first, inside of the <div />', () => {
    expect(wrapper.children().first().type()).to.equal('h1');
  });

  it("should render 'Directors Page' inside of the <h1 />", () => {
    expect(wrapper.children().first().text()).to.contain('Directors Page');
  });

  it("should render a <div /> for each director", () => {
    expect(wrapper.children().find('div').length).to.equal(3);
  });

  it("should render the right content for each director", () => {
    const directorContainers = wrapper.children().find('div');
    expect(directorContainers.length).to.equal(3);
    directorContainers.forEach((node, i) => {
      expect(node.html()).to.contain(directors[i].name);
      directors[i].movies.forEach((movie) => {
        expect(node.html()).to.contain(movie);
      });
    });
  });
});
