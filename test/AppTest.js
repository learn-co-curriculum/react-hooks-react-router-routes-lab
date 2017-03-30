import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import App from '../src/containers/App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('wraps the component in a div with className .app', () => {
    expect(wrapper.find('.app').length).to.equal(1);
  })

  it('contains a <NavBar /> component', () => {
    expect(wrapper.find('NavBar').length).to.equal(1);
  });

  it('contains a <Route path="/">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/')
    expect(route).to.not.be.undefined;
    expect(route.props().path).to.equal('/');
  })

  it('contains a <Route path="/actors">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/actors')
    expect(route).to.not.be.undefined;
    expect(route.props().path).to.equal('/actors');
  })

  it('contains a <Route path="/directors">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/directors')
    expect(route).to.not.be.undefined;
    expect(route.props().path).to.equal('/directors');
  })

  it('contains a <Route path="/movies">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/movies')
    expect(route).to.not.be.undefined;
    expect(route.props().path).to.equal('/movies');
  })
});
