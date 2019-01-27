import React from 'react';
import {Link, Route} from "react-router-dom";
import Photos from "./Photos";
import Downloads from "./Downloads";

export default ({ match }) => {
  return (
    <div className='wrapper'>
      <nav id='media-sidebar'>
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3><Link to={`${match.url}/photos`}>Gallery</Link></h3>
            <h3><Link to={`${match.url}/downloads`}>Downloads</Link></h3>
          </div>
        </nav>
      </nav>

      <Route exact path={match.path} render={() => <h3>Please select a Media Type.</h3>} />

      <Route path={`${match.url}/photos`} component={Photos} />
      <Route path={`${match.url}/downloads`} component={Downloads} />
    </div>
  )
}
