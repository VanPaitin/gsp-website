import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import logo from '../images/gspLogo.png'
import '../css/NavigationBar.css'

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div>
          <Nav className='justify-content-center navbar'>
            <NavLink tag={Link} to="/" className="logo"><img src={logo} alt="logo" style={{width: '50px', height: '40px'}}/></NavLink>
            <NavItem>
              <NavLink tag={Link} to="/" exact={true}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/about'>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/services">Our Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/live">Live Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/media'>Media</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/giving'>Online Giving</NavLink>
            </NavItem>
            {/*<NavItem>*/}
              {/*<NavLink tag={Link} to='/members'>Member Center</NavLink>*/}
            {/*</NavItem>*/}
          </Nav>
        </div>
      </div>
    )
  }
}
