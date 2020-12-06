import React from 'react'
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import NavBar from '../components/NavBar';

Enzyme.configure({ adapter: new Adapter() })

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  })

  it('wraps content in a div with .navbar class', () => {
    expect(wrapper.find('.navbar').length).to.equal(1);
  })

  describe('navlinks', () => {

     it('renders a Home <NavLink>', () => {
      const navLink = wrapper.findWhere(n => n.props().to === '/')
      expect(navLink.childAt(0).text()).to.equal('Home');
      expect(navLink.props().to).to.equal('/');
    });

    it('renders a Movies <NavLink>', () => {
      const navLink = wrapper.findWhere(n => n.props().to === '/movies')
      expect(navLink.childAt(0).text()).to.equal('Movies');
      expect(navLink.props().to).to.equal('/movies');
    })

    it('renders an Actors <NavLink>', () => {
      const navLink = wrapper.findWhere(n => n.props().to === '/actors')
      expect(navLink.childAt(0).text()).to.equal('Actors');
      expect(navLink.props().to).to.equal('/actors');
    })

    it('renders a Directors <NavLink>', () => {
      const navLink = wrapper.findWhere(n => n.props().to === '/directors')
      expect(navLink.childAt(0).text()).to.equal('Directors');
      expect(navLink.props().to).to.equal('/directors');
    })
  })

});
