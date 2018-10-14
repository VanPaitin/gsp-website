import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../images/gspLogo.png'
import '../css/NavigationBar.css'

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div>
          <Nav className='justify-content-center navbar'>
            <NavLink tag={Link} to="/" className="logo"><img src={logo} alt="logo" style={{width: '40px', height: '40px'}}/></NavLink>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Live Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/services">Our Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/giving'>Online Giving</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/members'>Member Center</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/about'>About Us</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    )
  }
}
