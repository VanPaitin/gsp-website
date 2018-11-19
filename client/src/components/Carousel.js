import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import welcome from '../images/welcome.png'
import secondSlide from '../images/secondSlide.png'
import couplesDinner from '../images/couplesDinner.png'
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
    src: couplesDinner,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

export default () => <UncontrolledCarousel items={items} />;
