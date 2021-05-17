import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from '../Pokecard/Pokecard'

class Pokedex extends Component{
    render(){
        const pokemonList = this.props.pokemonList;
        let styles = {};
        if(this.props.msg === "DRAW"){
            styles = {
                color: "orange"
            }
        }else if(this.props.msg === "WINNING HAND"){
            styles = {
                color: "green"
            }
        }else{
            styles = {
                color: "red"
            }
        }

        return(
            <div className="Pokedex">
                <h1 className="Pokedex-title" style={styles}>{this.props.msg}</h1>
                <h2 className="Pokedex-title">Total XP: {this.props.totalxp}</h2>
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