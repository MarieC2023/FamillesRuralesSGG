import React from 'react';
import { NavLink } from 'react-router-dom';
import '@partials/buttons.css';
import '@partials/links.css';
import './centre.css';

const Centre = () => {
    return (
        <div className="wrapper centre-page">
            <h1 className="page-title text-center mb-5">
                Accueil de Loisirs — Mercredi et Vacances scolaires
            </h1>
            {/* Carrousel photos des activités — à intégrer plus tard */}
            <section className="carrousel-photos mt-5">
                <h2>En images</h2>
                <div className="img-placeholder">[Carrousel des photos à venir]</div>
            </section>

            <section className="centre-section d-flex flex-column flex-md-row align-items-start gap-5">
                {/* Colonne image (à venir : photo de l’équipe) */}
                <div className="centre-image placeholder">
                    <div className="img-placeholder">Photo de l’équipe à venir</div>
                </div>

                {/* Colonne texte */}
                <div className="centre-texte">
                    <p>
                        L’accueil de loisirs accueille vos enfants de 3 à 12 ans pendant les vacances scolaires.
                    </p>
                    <p>
                        Une équipe d’animateurs diplômés accompagne chaque enfant pour développer sa créativité, son expression
                        et son imaginaire à travers des activités variées : jeux, ateliers, sorties…
                    </p>

                    <h2>Horaires et organisation</h2>
                    <ul>
                        <li>Ouvert pendant les vacances scolaires, à la journée.</li>
                        <li>En été, accueil sur les 3 premières semaines de juillet et les 2 dernières semaines d’août.</li>
                    </ul>

                    <h2>Restauration</h2>
                    <p>
                        Un repas chaud est préparé chaque jour par Sandra, notre cuisinière du restaurant scolaire.<br />
                        Un pique-nique est proposé une fois par semaine.
                    </p>

                    <NavLink to="/Contact" className="bouton mt-4">Nous contacter</NavLink>
                </div>
            </section>

{/* Visuels planning activités */}
            <section className="plannings mt-5">
                <h2>Nos plannings d’activités</h2>
                <div className="d-flex flex-column flex-md-row gap-4">
                    <div className="img-placeholder">Planning en cours</div>
                    <div className="img-placeholder">Planning prochaines vacances</div>
                </div>
            </section>

            {/* Documents d’inscription */}
            <section className="documents-section mt-5">
                <h2>Documents pour inscriptions</h2>
                <div className="documents d-flex flex-column flex-md-row justify-content-between gap-4">
                    <div className="carte-activite">
                        <h3>🧒 Accueil de Loisirs / Périscolaire</h3>
                        <p>Téléchargez les documents nécessaires à l’inscription :</p>
                        <ul>
                            <li><a href="/docs/DossierInscription.pdf" className="lien-telechargement" download>Dossier d’inscription</a></li>
                            <li><a href="/docs/FicheSanitaire.pdf" className="lien-telechargement" download>Fiche sanitaire</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Centre;
