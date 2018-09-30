import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import UncontrolledCarousel from './components/Carousel';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <br/>
        <UncontrolledCarousel/>
        <br/>
        <About/>
      </div>
    );
  }
}

export default App;
