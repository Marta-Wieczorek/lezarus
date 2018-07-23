import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Intro from './Intro'
import Navbar from "./Navbar";
import KP from "./KP";


class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1>Lezarus</h1>
              <p>Szybki przewodnik oraz omówienie podstawowych funkcjonalności udostępnianych graczom.</p>
          </header>

        <Router className="Router">
<div className="right">
    <Navbar/>
    <Route exact path="/intro" component={Intro} />
    <Route exact path="/kp" component={KP} />


</div>
        </Router>
      </div>
    );
  }
}

export default App;
