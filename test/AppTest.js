import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import App from '../src/components/App';
import NavBar from '../src/components/NavBar';

describe('<App />', () => {
  it('should contain a <NavBar /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NavBar).length).to.equal(1);
  });
});
