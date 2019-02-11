import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Giving from './components/Giving';
import Members from './components/Members';
import WatchLive from './components/WatchLive';
import Media from './components/media/Media';
// import firstPage from "./images/firstPage.jpg";
// import secondPage from "./images/secondPage.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={NavigationBar} />
        <Route path='/' exact={true} component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/live' component={WatchLive} />
        <Route path='/giving' component={Giving} />
        <Route path='/media/' component={Media}/>
        <Route path='/members' component={Members} />
        {/*<img src={firstPage} alt="The Good Shepherd" className="cover-page"/>*/}
        {/*<img src={secondPage} alt="God's Special People" className="cover-page"/>*/}
      </div>
    );
  }
}

export default App;
