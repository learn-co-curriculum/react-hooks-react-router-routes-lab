import React from 'react'
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Home from '../components/Home';

Enzyme.configure({ adapter: new Adapter() })

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
