import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li><Link to="/options">
                        <li id="options"><i className="fas fa-cogs"> </i></li>
                    </Link>
                    <Link to="logout">
                        <li id="logout"><i className="fas fa-power-off"> </i></li>
                    </Link></li>
                    <Link to="/">
                        <li>Strona główna</li>
                    </Link>
                    <Link to="/intro">
                        <li>Co to Lezarus</li>
                    </Link>
                    <Link to="/">
                        <li>Wieści</li>
                    </Link>
                    <Link to="/">
                        <li>Poczta</li>
                    </Link>
                    <Link to="/">
                        <li>Lista graczy</li>
                    </Link>
                    <Link to="/">
                        <li>Kalendarz</li>
                    </Link>
                    <Link to="/">
                        <li>Notatnik</li>
                    </Link>
                    <li><label> Postać A</label><input type="radio" name="character"/>
                        <label> Postać B</label><input type="radio" name="character"/>
                    </li>
                    <Link to="/kp">
                        <li>Karta postaci</li>
                    </Link>
                    <Link to="/">
                        <li>Ekwipunek</li>
                    </Link>
                    <Link to="/">
                        <li>Miasto</li>
                    </Link>
                    <Link to="/">
                        <li>Sesje</li>
                    </Link>
                    <Link to="/">
                        <li>Karczma</li>
                    </Link>
                    <Link to="/">
                        <li>Zarabianie</li>
                    </Link>
                    <Link to="/">
                        <li>Wyprawa</li>
                    </Link>
                    <Link to="/">
                        <li>Podróż</li>
                    </Link>
                    <Link to="/">
                        <li>Organizacje</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Navbar