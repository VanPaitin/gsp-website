import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from 'react-transition-group';
import '../../css/Media.css';


export default class Album extends Component {
  constructor(props) {
    super(props);

    this.togglePicture = this.togglePicture.bind(this);
  }

  imageGrid() {
    return this.props.pictures.map(picture => {
      return {
        src: picture,
        thumbnail: picture,
        thumbnailWidth: 320,
        thumbnailHeight: 250
      }
    })
  }

  togglePicture() {
    this.props.toggleDisplayPicture(this.props.index);
  }

  orientationAngle() {
    return this.props.displayIndex === this.props.index ? 180 : 0;
  }

  render() {
    return(
      <div className='album-wrapper'>
        <h4 onClick={this.togglePicture}>
          {this.props.event}
          <FontAwesomeIcon icon={faAngleDown} transform={{rotate: this.orientationAngle()}}/>
        </h4>

        <CSSTransition
          in={this.props.displayIndex === this.props.index}
          appear={this.props.displayIndex === this.props.index}
          timeout={600}
          classNames="slide" >
          <Gallery
            images={this.imageGrid()}
            enableImageSelection={false}
            margin={10}
            backdropClosesModal={true}
            showLightboxThumbnails={true}
          />
        </CSSTransition>
      </div>
    )
  }
}
