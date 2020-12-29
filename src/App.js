import './App.css';
import Header from "./components/ui/Header";
import Pokeball from "./images/pokeball.svg";
import {Route, Switch} from "react-router";
import PagePokemons from "./components/page/PagePokemons/PagePokemons";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-layout'>
        <Switch>
          <Route path="/home">
            <div className='App-body'>Click menu button to view some information about pokemons</div>
            <img className='App-logo' src={Pokeball} alt='Pokeball' />
          </Route>
          <Route path="/pokemons-list">
            <PagePokemons />
          </Route>
          <Route path="/items">
            <div>Items</div>
          </Route>
          <Route path="/locations">
            <div>Locations</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
