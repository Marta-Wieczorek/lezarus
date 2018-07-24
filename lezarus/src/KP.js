import React, {Component} from "react"

class KP extends Component {
    render() {
        return (
            <div className="kp">
                <div className="awek">Miejsce na awatar</div>
                <div className="metryka">
                    <p className="metryka_wpis"><label className="metryka_wpis_label">Imię:</label> <span>imię-z-propsów</span></p>
                    <hr />
                    <p className="metryka_wpis"><label className="metryka_wpis_label">Rasa:</label> <span>rasa-z-propsów</span></p>
                    <hr />
                    <p className="metryka_wpis"><label className="metryka_wpis_label">Szczep:</label> <span>szczep-z-propsów</span></p>
                    <hr />
                    <p className="metryka_wpis"><label className="metryka_wpis_label">Płeć:</label> <span>płeć-z-propsów</span></p>
                    <hr />
                    <p className="metryka_wpis"><label className="metryka_wpis_label">Wiek:</label> <span>wiek-z-propsów</span></p>
                    <hr />
                    <p className="metryka_wpis"><label className="metryka_wpis_label">Lokacja:</label> <span>lokacja-z-propsów</span></p>
                    <hr />
                    <p className="metryka_wpis"><label className="metryka_wpis_label">FPD:</label> <span>FPD-z-propsow</span></p>
                    <hr />
                </div>
                <div className="cechy">
                    <ul><p className="stats">Statystyki:</p>
                        <li>Percepcja: </li>
                        <li>Siła: </li>
                        <li>Siła Woli: </li>
                        <li>Wytrzymałość: </li>
                        <li>Zręczność: </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default KP