import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Collapse from 'bootstrap/js/dist/collapse'; 
import logo from '@/assets/logo.png';
import './header.css';

const Header = () => {
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
    const menuToggle = document.getElementById("navbarSupportedContent");

    const handler = () => {
      if (window.innerWidth < 992 && menuToggle.classList.contains("show")) {
        new Collapse(menuToggle, { toggle: false }).hide();
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
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      </div>
    </nav>
  );
};

export default Header;
