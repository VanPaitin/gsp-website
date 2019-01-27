import React, { Component } from 'react';
import { get } from '../../lib/requestClient';

export default class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    get('/albums').then((albums) => this.setState({ albums }))
  }

  render() {
    return (
      this.state.albums.length ?
        <div className='gallery-content'>
          {this.state.albums.map(album => <h3>{album.event}</h3>)}
        </div>
        :
         <h3>Could not fetch any albums</h3>
    )
  }
}
