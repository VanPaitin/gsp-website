import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import welcome from '../images/welcome.png'
import secondSlide from '../images/secondSlide.png'
import Jibodu from '../images/Jibodu.png'
import '../css/Carousel.css'

const items = [
  {
    src: welcome,
    // altText: 'Slide 1',
    caption: '',
    // header: 'God bless you'
  },
  {
    src: secondSlide,
    altText: 'Slide 2',
    caption: '',
    // header: 'Halleluyah'
  },
  {
    src: Jibodu,
    altText: 'Slide 3',
    caption: ''
  }
];

export default () => <UncontrolledCarousel items={items} />;
