import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../css/Giving.css';
import flower from '../images/flower.jpg';
import backdrop from '../images/givingBackdrop.jpg';

export default class Giving extends Component {
  render() {
    return(
      <div className="backdrop">
        <img src={backdrop} alt="" className="backdrop-image"/>
        <div className='backdrop-content'>
          <img src={flower} alt="" className='flower'/>
          <div className="giving-details">
            <h3>Giving Option</h3>
            <p>Online - <Button outline color="secondary" size="lg">Click Here</Button></p>
            <p>Cheque - Raise a cheque in the favor of RCCG THE GOOD SHEPHERD PASTURE</p>
            <Button color="primary" size="lg" className="contact">
              <address>
                For Enquiries, Please Contact: 08160671023, or <a href="mailto:account@rccgtgsp.org">Send an email to us</a>
              </address>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
