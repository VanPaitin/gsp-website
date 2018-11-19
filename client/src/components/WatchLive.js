import React, { Component } from 'react';

export default class WatchLive extends Component {
  render() {
    return(
      <div className="watch-live">
        <iframe
          title="RCCG GSP Video"
          width="1150"
          height="647"
          src="https://www.youtube.com/embed/hhMSxp368QM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}
