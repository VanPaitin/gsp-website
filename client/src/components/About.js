import React, { Component } from 'react';
import '../css/About.css';
import about from '../images/about.jpg';

export default class About extends Component {
  render() {
    return(
      <div className="about">
        <img src={about} alt=""/>
        <div className="about-text">
          <h1>ABOUT US</h1>
          <p>
            TGSP is an acronym for THE GOOD SHEPHERD'S PASTURE. We are a parish of The
            Redeemed Christian Church of God located at the heart of mainland (Alagomeji) under
            The Lagos Province 24, Region 20, Zone 3 and Area 005. We are a church like family,
            full of God chasers – people who are after the heart God.
          </p>
        </div>
      </div>
    )
  }
}
