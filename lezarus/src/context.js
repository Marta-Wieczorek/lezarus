import React, {Component} from 'react';


const CharacterContext = React.createContext();
export const CharacterConsumer = CharacterContext.Consumer;


export class CharacterProvider extends Component {
    state = {
        id: null,
        characters:null,
        char_A: null,
        error: null,
        characterId: null,
    }


    componentDidMount() {
        this.setState({
            fetching: true,
            error: null
        })

        fetch(
            process.env.PUBLIC_URL + '/character.json'
        ).then(
            response => response.json()
        ).then(
            characters => this.setState({
                fetching: false,
                characters: characters,
                id:characters.id,
                char_A: characters.char_A,
                stats: Object.keys(characters.char_A)
            })
        ).catch(
            error => this.setState({
                error,
                fetching: false,
            })
        )
    }

    render() {
        return (
            <CharacterContext.Provider value={this.state}>
                {this.props.children}
            </CharacterContext.Provider>
        )
    }
}

export function withCharacter(Component) {
    function CharacterAwareComponent(props) {
        return (
            <CharacterContext.Consumer>
                {
                    state => <Component {...props} {...state}/>
                }
            </CharacterContext.Consumer>
        )
    }

    CharacterAwareComponent.displayName = `CharacterAware(${Component.displayName || Component.name || 'Component'})`
    return CharacterAwareComponent
}
