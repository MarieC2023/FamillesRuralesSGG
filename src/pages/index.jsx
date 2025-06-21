import React from 'react';
import { NavLink } from 'react-router-dom';
import '@partials/buttons.css';
import '@partials/card.css';
import '@partials/links.css';

import entreePeri from '@/assets/entreePeri.webp';


import './index.css';

const Index = () => {
    return (
        <div className="wrapper homepage">
            <h1 className="page-title text-center mb-5">
                Un lieu d’accueil convivial pour les enfants de Saint-Georges-des-Gardes
            </h1>
            {/* Titre & introduction */}
            <section className="hero d-flex flex-column flex-md-row align-items-center gap-8">
                {/* Colonne image */}
                <div className="hero-image">
                    <img
                        src={entreePeri}
                        alt="Entrée du périscolaire"
                        className="img-fluid rounded"
                    />
                </div>

                <div className="col-md-6">
                    <p>
                        Ici, nous accompagnons les familles au quotidien en proposant des services adaptés aux enfants de 3 à 12 ans :
                        accueil périscolaire, centre de loisirs, restaurant scolaire, et bien plus encore.
                    </p>
                    <p>
                        <strong>Notre mission ?</strong> Offrir aux enfants un cadre sécurisé, convivial et épanouissant, tout en
                        soutenant les parents dans l’organisation de leur quotidien.
                    </p>
                    <p>
                        <strong>Nos équipes</strong>, composées de professionnels et de bénévoles engagés, œuvrent chaque jour pour
                        proposer des activités enrichissantes, des repas équilibrés et un accueil chaleureux.
                    </p>
                    <p>
                        ➡️ Envie d’en savoir plus ? Découvrez nos différentes pages et rejoignez l’aventure Familles Rurales !
                    </p>
                </div>
            </section>


            {/* Programmes */}
            <section className="programmes">
                <h2>Nos programmes d’activités</h2>
                <NavLink className="bouton" to="/Centre">→ Voir la page Accueil de Loisirs</NavLink>
            </section>

            {/* Cartes documents */}
            <section className="documents-section mt-5">
                <h2>Documents pour inscriptions</h2>
                <div className="documents d-flex flex-column flex-md-row justify-content-between gap-4">
                    {/* Carte Accueil de loisirs */}
                    <div className="carte-activite">
                        <h3>🧒 Accueil de Loisirs / Périscolaire</h3>
                        <p>Téléchargez les documents nécessaires à l’inscription :</p>
                        <ul>
                            <li><a href="/docs/DossierInscription.pdf" className="lien-telechargement" download>Dossier d’inscription</a></li>
                            <li><a href="/docs/FicheSanitaire.pdf" className="lien-telechargement" download>Fiche sanitaire</a></li>
                        </ul>
                    </div>

                    {/* Carte Restaurant scolaire */}
                    <div className="carte-activite">
                        <h3>🍽️ Restaurant scolaire</h3>
                        <p>Téléchargez les documents nécessaires à l’inscription :</p>
                        <ul>
                            <li><a href="/docs/BulletinInscriptionCantine.pdf" className="lien-telechargement" download>Bulletin d’inscription cantine</a></li>
                            <li><a href="/docs/ReglementInterieur.pdf" className="lien-telechargement" download>Règlement intérieur</a></li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Bouton contact */}
            <div className="text-center mt-5">
                <NavLink to="/Contact" className="bouton">Nous contacter</NavLink>
            </div>
        </div>
    );
};

export default Index;
