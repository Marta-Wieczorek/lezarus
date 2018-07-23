import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <ul>

                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/intro">Co to Lezarus</Link></li>

                    <li><Link to="/options">Opcje konta</Link></li>
                    <li><Link to="logout">Wylogowanie</Link></li>
                    <li><label> Postać A</label><input type="radio" name="character" />
                        <label> Postać B</label><input type="radio" name="character" />
                    </li>
                    <li><Link to="/">Karta postaci</Link></li>
                    <li><Link to="/">Ekwipunek</Link></li>
                    <li><Link to="/">Poczta</Link></li>
                    <li><Link to="/">Sesje</Link></li>
                    <li><Link to="/">Karczma</Link></li>
                    <li><Link to="/">Notatnik</Link></li>
                    <li><Link to="/">Lista graczy</Link></li>
                    <li><Link to="/">Zarabianie</Link></li>
                    <li><Link to="/">Wyprawa</Link></li>
                    <li><Link to="/">Wieści</Link></li>
                    <li><Link to="/">Podróż</Link></li>
                    <li><Link to="/">Miasto</Link></li>
                    <li><Link to="/">Organizacje</Link></li>
                    <li><Link to="/">Kalendarz</Link></li>
                    </ul>
            </div>
        )
    }
}

export default Navbar