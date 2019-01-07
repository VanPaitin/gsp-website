import React, { Component } from 'react';
import ImageComponent from './ImageComponent';
import '../css/services.css'
import services from "../images/services.png";

export default class Services extends Component {
  render() {
    return(
      <ImageComponent>
        <img src={services} alt="Our Services" className="services"/>
      </ImageComponent>
    )
  }
}
