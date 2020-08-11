import React, { Component } from 'react';
import './App.css';
import Nav from './Rooms/Nav';
import Home from './Rooms/Home'
import Hall from './Rooms/Hall';
import LivingRoom from './Rooms/LivingRoom';
import Bedroom from './Rooms/Bedroom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hall" component={Hall} />
          <Route path="/livingRoom" component={LivingRoom} />
          <Route path="/bedroom" component={Bedroom} />
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;