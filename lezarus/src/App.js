import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Intro from './Intro'


class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1>Lezarus</h1>
              <p>Szybki przewodnik oraz omówienie podstawowych funkcjonalności udostępnianych graczom.</p>
          </header>

        <Router>
<div>

            <Route exact path="/intro" component={Intro} />
            <Link to="/intro">Czym jest Lezarus?</Link>

</div>
        </Router>
      </div>
    );
  }
}

export default App;
