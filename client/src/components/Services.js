import React, { Component } from 'react';
import { Table } from 'reactstrap';
import ImageComponent from './ImageComponent';
import '../css/services.css'
import services from "../images/services.jpg";

export default class Services extends Component {
  render() {
    return(
      <ImageComponent>
        <img src={services} alt="Our Services" className="services"/>
        <div className="services-text">
          <h1><b>Our Services</b></h1>
          <Table>
            <thead>
              <tr className="services-headings">
                <th><b>Day</b></th><th><b>Service</b></th><th><b>Time</b></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3">Sunday</td><td>First Service</td><td>8am - 10am</td>
              </tr>
              <tr>
                <td>Second Service</td><td>10am - 12:30pm</td>
              </tr>
              <tr className="monthly-programmes">
                <td>Anointing Service (Monthly)</td><td>5pm <span>(Second Sundays)</span></td>
              </tr>
              <tr>
                <td rowSpan="2">Tuesdays</td><td>Digging Deep</td><td>6:30pm - 8pm</td>
              </tr>
              <tr className="monthly-programmes">
                <td>Prayer Clinic (Monthly)</td><td>8am - 9:30am <span>(First Tuesdays)</span></td>
              </tr>
              <tr>
                <td rowSpan="3">Thursday</td><td>Faith Clinic</td><td>6:30pm - 8pm</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </ImageComponent>
    )
  }
}
