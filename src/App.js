import pokemonList from './Data/PokemonList';
import Pokegame from './Pokegame/Pokegame'

function App() {
  return (
    <div className="App">
      <Pokegame
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
