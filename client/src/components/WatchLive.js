import React, { Component } from 'react';
import { get } from '../lib/requestClient';

export default class WatchLive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: ''
    }
  }

  componentDidMount() {
    get('/live_program')
      .then(({ url }) => {
        this.setState({ videoId: url.split('/').pop() })
      });
  }

  render() {
    return(
      <div className="watch-live">
        <iframe
          title="RCCG GSP Video"
          width="1150"
          height="647"
          src={`https://www.youtube.com/embed/${this.state.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}
