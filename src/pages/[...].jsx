import React from 'react'
import { NavLink } from 'react-router-dom'
import "./notfound.css"

const NotFound = () => {
  return (
    <div className="wrapper notfound-page">
      <h1>404 - Page non trouvée</h1>
      <img src="src/assets/404.webp" alt="Page non trouvée" className="img-404" />

      <p>Oups ! Cette page n'existe pas.</p>
      <NavLink to="/" className="bouton">Retour à l'accueil</NavLink>
    </div>
  )
}

export default NotFound
