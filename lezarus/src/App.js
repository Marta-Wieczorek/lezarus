import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Intro from './Intro'
import Navbar from "./Navbar";
import KP from "./KP";
import {CharacterProvider, withCharacter} from "./context";


class App extends Component {
    render() {
        return (
            <CharacterProvider>
            <div className="App">
                <header className="App-header">
                    <h1>Lezarus</h1>
                    <p>Szybki przewodnik oraz omówienie podstawowych funkcjonalności udostępnianych graczom.</p>
                </header>

                <Router>
                    <div>
                        <Navbar/>
                        <Route exact path="/intro" component={Intro}/>
                        <Route exact path="/kp" component={KP}/>


                    </div>
                </Router>
            </div>
            </CharacterProvider>
        );
    }
}

export default withCharacter(App);
