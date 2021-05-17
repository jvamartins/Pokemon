import React, {Component} from 'react';
import './Pokegame.css';
import Pokedex from '../Pokedex/Pokedex';

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

class Pokegame extends Component{
    render(){
        let pokemonList = this.props.pokemonList;
        let hand1 = shuffle([...pokemonList]);
        let hand2 = hand1.splice(0, pokemonList.length >> 1);

        let totalXpHand1 = 0;
        for(let i = 0; i < hand1.length; i++){
            totalXpHand1 += hand1[i].base_experience;
        }

        let totalXpHand2 = 0;
        for(let i = 0; i < hand2.length; i++){
            totalXpHand2 += hand2[i].base_experience;
        }

        let msghand1 = "";
        let msghand2 = "";
        if(totalXpHand1 > totalXpHand2){
            msghand1 = "WINNING HAND";
            msghand2 = "LOSING HAND";
        }else if(totalXpHand1 < totalXpHand2){
            msghand1 = "LOSING HAND";
            msghand2 = "WINNING HAND";
        }else{
            msghand1 = "DRAW";
            msghand2 = "DRAW";
        }

        return (
            <div className="Pokegame">
                <Pokedex
                    pokemonList={hand1}
                    msg={msghand1}
                    totalxp = {totalXpHand1}
                />
                <Pokedex
                    pokemonList={hand2}
                    msg={msghand2}
                    totalxp = {totalXpHand2}
                />
            </div>
        )
    }
}

export default Pokegame;