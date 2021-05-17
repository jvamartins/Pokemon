import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from '../Pokecard/Pokecard'

class Pokedex extends Component{
    render(){
        const pokemonList = this.props.pokemonList;
        return(
            <div className="Pokedex">
                <h1 className="Pokedex-title">Pokedex!</h1>
                <div className="Pokedex-cards">
                    {
                        pokemonList.map(p => 
                            <Pokecard
                                key={p.id}
                                id={p.id}
                                name={p.name}
                                type={p.type}
                                exp={p.base_experience}
                            />  
                        )
                    }
                </div>
                
            </div>
        )
    }
}

export default Pokedex;