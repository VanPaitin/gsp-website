import React, { Component } from 'react';
import services from "../images/services.png";

export default class Services extends Component {
  render() {
    return(
      <div>
        <br/>
        <img src={services} alt="Our Services" className="services"/>
        <br/>
      </div>
    )
  }
}
