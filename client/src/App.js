import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Giving from './components/Giving';
import Members from './components/Members';
import WatchLive from './components/WatchLive';
// import firstPage from "./images/firstPage.jpg";
// import secondPage from "./images/secondPage.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Route path='/' component={NavigationBar} />
          <Route path='/' exact={true} component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/live' component={WatchLive} />
          <Route path='/giving' component={Giving} />
          <Route path='/members' component={Members} />
        </div>

        {/*<img src={firstPage} alt="The Good Shepherd" className="cover-page"/>*/}
        {/*<img src={secondPage} alt="God's Special People" className="cover-page"/>*/}
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
    );
  }
}

export default App;
