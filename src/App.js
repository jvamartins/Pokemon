import Pokedex from './Pokedex/Pokedex';
import pokemonList from './Data/PokemonList';

function App() {
  return (
    <div className="App">
      <Pokedex
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
