import React, { Component } from 'react';
import Album from './Album';
import { get } from '../../lib/requestClient';

export default class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      albumDisplayIndex: 0
    };

    this.toggleDisplayPictures = this.toggleDisplayPictures.bind(this);
  }

  componentDidMount() {
    get('/albums').then((albums) => this.setState({ albums }))
  }

  toggleDisplayPictures(index) {
    this.setState({ albumDisplayIndex: index })
  }

  render() {
    return (
      this.state.albums.length ?
        <div className='gallery-content'>
          {this.state.albums.map((album, index) =>
            <Album
              {...album}
              key={index}
              index={index}
              displayIndex={this.state.albumDisplayIndex}
              toggleDisplayPicture={this.toggleDisplayPictures}
            />
          )}
        </div>
        :
         <h3>Could not fetch any albums</h3>
    )
  }
}
