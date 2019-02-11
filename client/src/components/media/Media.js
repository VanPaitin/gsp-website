import React, { Component } from 'react';
import { NavLink, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import Photos from "./Photos";
import Downloads from "./Downloads";

export default class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotateAngle: 180
    };
    this.showOrHideSidebar = this.showOrHideSidebar.bind(this);
    this.sidebar = React.createRef()
  }

  showOrHideSidebar() {
    let sidebar = this.sidebar.current;

    if (sidebar.classList.contains('active')) {
      this.setState({ rotateAngle: 0 });
      sidebar.classList.remove('active')
    } else {
      this.setState({ rotateAngle: 180 });
      sidebar.classList.add('active')
    }
  }

  render() {
    let match = this.props.match;

    return (
      <div className='wrapper'>
        <nav id='media-sidebar'>
          <nav id="sidebar" ref={this.sidebar}>
            <div className="sidebar-header">
              <NavLink to={`${match.url}/photos`} activeClassName='media-active'>Gallery</NavLink>
              <NavLink to={`${match.url}/downloads`} activeClassName='media-active'>Downloads</NavLink>
            </div>
          </nav>
        </nav>
        <div className="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
              <FontAwesomeIcon icon={faAngleDoubleLeft} onClick={this.showOrHideSidebar} style={{fontSize: '40px', color: '#6d7fcc'}} transform={{rotate: this.state.rotateAngle}}/>

              <Route exact path={match.path} render={() => <h3>Please select a Media Type.</h3>} />
              <Route path={`${match.url}/photos`} component={Photos} />
              <Route path={`${match.url}/downloads`} component={Downloads} />
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
