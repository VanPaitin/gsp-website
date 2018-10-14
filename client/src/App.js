import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services'
import Giving from './components/Giving'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={NavigationBar} />
        <Route path='/' exact={true} component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/giving' component={Giving} />
      </div>
    );
  }
}

export default App;
