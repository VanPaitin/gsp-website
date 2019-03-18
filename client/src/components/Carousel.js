import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { get } from '../lib/requestClient';
import welcome from '../images/welcome.png'
import secondSlide from '../images/secondSlide.png'
import '../css/Carousel.css'

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: [welcome, secondSlide]
    }
  }

  componentDidMount() {
    get('/programs').then(programs => {
      this.setState({programs: [...this.state.programs, ...programs]})
    })
  }

  formatImages() {
    return this.state.programs.map(program => {
      return { src: program, caption: '' }
    })
  }

  render() {
    return <UncontrolledCarousel items={this.formatImages()} />
  }
}
