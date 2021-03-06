import React, { Component } from 'react';
import ImageComponent from './ImageComponent'
import '../css/About.css';
import about from '../images/about.jpg';

export default class About extends Component {
  render() {
    return(
      <ImageComponent>
        <img src={about} alt=""/>
        <div className="about-text">
          <h1>ABOUT US</h1>
          <p>
            THE GOOD SHEPHERD'S PASTURE is a parish of The
            Redeemed Christian Church of God located at the heart of mainland (Alagomeji) under
            The Lagos Province 24, Region 20, Zone 3 and Area 005. We are a church like family,
            full of God chasers – people who are after the heart God.
          </p>
        </div>
      </ImageComponent>
    )
  }
}
