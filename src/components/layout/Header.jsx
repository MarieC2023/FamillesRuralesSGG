import React from 'react' 
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/peri">Périscolaire</NavLink></li>
          <li><NavLink to="/centre">Centre de loisirs</NavLink></li>
          <li><NavLink to="/resto">Cantine</NavLink></li>
          <li><NavLink to="/equipe">L’équipe</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;