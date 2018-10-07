import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import UncontrolledCarousel from './components/Carousel';
import WatchLive from './components/WatchLive'
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
        <WatchLive />
      </div>
    );
  }
}

export default App;
