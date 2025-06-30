import React from 'react'
import { NavLink } from 'react-router-dom'
import "./notfound.css"

import { Helmet } from "react-helmet";

import erreur404 from '@/assets/404.webp';

const NotFound = () => {
  return (
    <div className="wrapper notfound-page">
      <Helmet>
        <title>Page introuvable - Familles Rurales Saint-Georges-des-Gardes</title>
        <meta
          name="description"
          content="Oups ! La page que vous cherchez n’existe pas. 
          Revenez à l’accueil ou contactez-nous pour être aidé."
        />
      </Helmet>

      <h1 className="text-center mb-5">404 - Page non trouvée</h1>
      <img
        src={erreur404}
        alt="Page non trouvée"
        className="img-404"
      />

      <p>Oups ! Cette page n'existe pas.</p>
      <NavLink to="/" className="bouton">Retour à l'accueil</NavLink>
    </div>
  )
}

export default NotFound
