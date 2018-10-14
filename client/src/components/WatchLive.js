import React, { Component } from 'react';

export default class WatchLive extends Component {
  render() {
    return(
      <div>
        <iframe
          title="RCCG GSP Video"
          width="1150"
          height="647"
          src="https://www.youtube.com/embed/UFcHp5Tc7uI"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}
