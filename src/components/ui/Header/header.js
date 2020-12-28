import './header.css';
import PokemonLogo from '../../../images/pokemon_logo.svg'
import Pikachu from '../../../images/pikachu.svg'
import React from "react";
import {Link} from "react-router-dom";



function Header() {
  return (
    <div className='header'>
      <img src={PokemonLogo} alt='Main logo' className='header-img'/>
      <img src={Pikachu} alt='Pikachu' className='header-img header-img-pikachu'/>
      <div className='header-items-container' onClick={(event) => console.log(event.target)}>
        <Link to="/home">Home</Link>
        <Link to="/pokemons-list">Pokemons</Link>
        <Link to="/items">Items</Link>
        <Link to="/locations">Locations</Link>
      </div>
    </div>
  );
}

export default Header;
