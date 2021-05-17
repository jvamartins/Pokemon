import React, {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component{
    render(){
        //const imgUrlPixel = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`;
        const imgUrlFancier = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.id.toString().padStart(3, "0")}.png`;
        return(
            <div className="Pokecard">
                <h3 className="Pokecard-name">{this.props.name}</h3>
                <img src={imgUrlFancier} alt=""/>
                <h3>Type: {this.props.type}</h3>
                <h3>Exp: {this.props.exp}</h3>
            </div>
        )
    }
}

export default Pokecard;