import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    return(
      <div className="images">
        {this.props.children}
      </div>
    )
  }
}
