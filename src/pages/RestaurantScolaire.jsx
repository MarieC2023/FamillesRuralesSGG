import React from 'react';
import { NavLink } from 'react-router-dom';
import '@partials/buttons.css';
import '@partials/links.css';
import './resto.css';

import { Helmet } from "react-helmet";

import extCantine from '@/assets/cantine.webp';
import intCantine from '@/assets/cantine2.webp';

const RestaurantScolaire = () => {
    return (
        <div className="wrapper resto-page">
            <Helmet>
                <title>Restauration scolaire - Familles Rurales Saint-Georges-des-Gardes</title>
                <meta
                    name="description"
                    content="Tout savoir sur le service de restauration scolaire : 
                    menus, inscription, fonctionnement, équilibre alimentaire et sensibilisation."
                />
            </Helmet>

            <h1 className="text-center mb-5">
                Restaurant scolaire
            </h1>

            <section className="resto-section d-flex flex-column flex-md-row align-items-start gap-5">
                {/* Colonne image */}
                <div className="resto-images">
                    <img
                        src={extCantine}
                        alt="Vue extérieure du restaurant scolaire"
                        className="img-fluid rounded"
                    />
                </div>

                {/* Colonne texte */}
                <div className="resto-texte">
                    <p>
                        Les petits et grands écoliers sont accueillis avec chaleur par Audrey, Maryline, Sarah, Jessica, Laurence,
                        et toute une équipe de bénévoles dynamiques.
                    </p>
                    <p>
                        Sandra, notre cuisinière, prépare chaque jour des repas équilibrés et savoureux.
                    </p>

                    <h2>Appel aux bénévoles</h2>
                    <p>
                        Vous avez envie de donner un coup de main pour le service, rencontrer les enfants et participer à la vie de l’école ?<br />
                        Nous serons ravis de vous accueillir parmi nous !
                    </p>

                    <NavLink to="/Contact" className="bouton mt-4">Nous contacter</NavLink>
                </div>
            </section>

            {/* Documents d’inscription */}
            <section className="documents-section mt-5">
                <h2>Documents pour inscriptions</h2>
                <div className="documents d-flex flex-column flex-md-row justify-content-between gap-4">
                    <div className="carte-activite">
                        <h3>🍽️ Restaurant scolaire</h3>
                        <p>Téléchargez les documents nécessaires à l’inscription :</p>
                        <ul>
                            <li><a href="/docs/BulletinInscriptionCantine.pdf" className="lien-telechargement" download>Bulletin d’inscription cantine</a></li>
                            <li><a href="/docs/ReglementInterieur.pdf" className="lien-telechargement" download>Règlement intérieur</a></li>
                        </ul>
                    </div>

                    <img
                        src={intCantine}
                        alt="Salle intérieure du restaurant scolaire"
                        className="img-fluid rounded resto-img-doc"
                    />
                </div>
            </section>
        </div >
    );
};

export default RestaurantScolaire;
