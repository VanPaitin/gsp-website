import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/gspLogo.png'
import '../css/NavigationBar.css'

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div>
          <Nav className='justify-content-center navbar'>
            <NavItem>
              <NavLink href="#" className="logo"><img src={logo} alt="logo" style={{width: '40px', height: '40px'}}/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Live Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Our Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Online Giving</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Member Center</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About Us</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    )
  }
}