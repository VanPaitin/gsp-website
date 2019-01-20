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
        <div className="bible-teachings"><br/><br/>
          <h2>Practical Bible Teachings</h2>
          <h1>In the month of {thisMonth}</h1>
          <div className="videos-container">
            <div className="videos">
              <iframe width="350" height="220" title="clip"
                      src="https://www.youtube.com/embed/8k8GCcHYtVM"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
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
        <footer className="section footer-classic context-dark bg-image"
                style={{background: '#2d3246'}}>
          <div className="container">
            <div className="row row-30">
              <div className="col-md-4 col-xl-5">
                <div className="pr-xl-4">
                  <p>THE GOOD SHEPHERD'S PASTURE is a parish of The Redeemed Christian Church of God located at the heart of mainland (Alagomeji) under The Lagos Province 24, Region 20, Zone 3 and Area 005. We are a church like family, full of God chasers – people who are after the heart God.</p>

                  <p className="rights">
                    <span className="copyright-year">{new Date().getFullYear()}</span> <span>©</span><span>. </span><br/><span>All Rights Reserved.</span>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <h5>Contacts</h5>
                <dl className="contact-list">
                  <dt>Address:</dt>
                  <dd>232/234, Herbert Macaulay Way, Alagomeji, Yaba, Lagos.</dd>
                </dl>
                <dl className="contact-list">
                  <dt>email:</dt>
                  <dd><a href="mailto:rccgtgsp@gmail.com">rccgtgsp@gmail.com</a></dd>
                </dl>
                <dl className="contact-list">
                  <dt>phones:</dt>
                  <dd><a href="tel:01 4541520">01 4541520</a></dd>
                </dl>
              </div>
              <div className="col-md-4 col-xl-3">
                <h5>Links</h5>
                <ul className="nav-list">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Our Services</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
