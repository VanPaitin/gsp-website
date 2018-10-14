import React, { Component } from 'react';
import UncontrolledCarousel from "./Carousel";
import WatchLive from "./WatchLive";

export default class Home extends Component {
  render() {
    return(
      <div>
        <br/>
        <UncontrolledCarousel/>
        <br/>
        <WatchLive />
      </div>
    )
  }
}
