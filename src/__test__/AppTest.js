import React from 'react'
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from '../components/App';

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('contains a <NavBar /> component', () => {
    expect(wrapper.find('NavBar').length).to.equal(1);
  });

  it('contains a <Route path="/">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/')
    expect(route).to.exist();
    expect(route.props().path).to.equal('/');
  })

  it('contains a <Route path="/actors">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/actors')
    expect(route).to.exist();
    expect(route.props().path).to.equal('/actors');
  })

  it('contains a <Route path="/directors">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/directors')
    expect(route).to.exist();
    expect(route.props().path).to.equal('/directors');
  })

  it('contains a <Route path="/movies">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/movies')
    expect(route).to.exist();
    expect(route.props().path).to.equal('/movies');
  })
});
