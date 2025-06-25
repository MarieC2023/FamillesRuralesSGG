import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo.png';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Changement de couleur au scroll
  useEffect(() => {
    const header = document.querySelector(".navbarScroll");
    const handleScroll = () => {
      const top = window.scrollY;
      header.classList.toggle("navbarDark", top >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermeture auto du menu burger
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");

    const handler = () => {
      if (window.innerWidth < 992) {
        setMenuOpen(false);
      }
    };

    navLinks.forEach(link => link.addEventListener("click", handler));
    return () => {
      navLinks.forEach(link => link.removeEventListener("click", handler));
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbarScroll">
      <div className="container navbar-container">
        <NavLink className="navbar-brand" to="/">
          <img className="logoNav" src={logo} alt="Logo de la périscolaire - Accueil" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Menu déroulant en mobile */}
      <div className={`menu-mobile ${menuOpen ? 'menu-open' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Accueil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/TeamAnim">La Team Anim</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Centre">Accueil de Loisirs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Peri">Périscolaire</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Resto">Restaurant scolaire</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Equipe">Les bénévoles</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
