import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from '../src/components/Home';


describe('Home', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<Home />);
  })

  it('should only render one <h1 /> inside of the <div />', () => {
    expect(wrapper.children().first().type()).to.equal('h1');
  });

  it("should render 'Home Page' inside of the <h1 />", () => {
    expect(wrapper.children().first().text()).to.contain('Home Page');
  });
});
