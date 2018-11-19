import React, { Component } from 'react';
import UncontrolledCarousel from "./Carousel";
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    let months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let now       = new Date();
    let thisMonth = months[now.getMonth()];
    return(
      <div>
        <br/>
        <UncontrolledCarousel/>
        <br/>
        <div className="bible-teachings"><br/><br/>
          <h2>Practical Bible Teachings</h2><br/>
          <h1>In the month of {thisMonth}</h1>
          <div className="videos-container">
            <div className="videos">
              <iframe width="350" height="220" title="clip"
                      src="https://www.youtube.com/embed/8k8GCcHYtVM"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
              Kalejaiye
            </div>
            <div className="videos">
              <iframe width="350" height="220" title="clip"
                      src="https://www.youtube.com/embed/ABuU53GpHl8"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
            </div>
            <div className="videos">
              <iframe width="350" height="220" title="clip"
                      src="https://www.youtube.com/embed/l5jGgo8Wn3E"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
            </div>
          </div>
          <div className="gallery">
            <Link to='/photos'>Photo Gallery</Link>
          </div>
        </div>
      </div>
    )
  }
}
