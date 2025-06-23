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
                        Le centre de loisirs accueille les enfants de 3 à 12 ans, tous les mercredis et pendant les vacances scolaires.
                    </p>
                    <p>
                        Encadrés par une équipe d’animateurs diplômés, les enfants découvrent chaque semaine des activités variées :
                        jeux collectifs, ateliers créatifs, sorties, temps calmes...<br />
                    </p>
                    <p>
                        <strong>L’objectif :</strong> favoriser leur épanouissement, leur créativité et leur autonomie dans un cadre bienveillant.
                    </p>

                    <h2>Mercredis : plusieurs formules possibles</h2>
                    <ul>
                        <li><strong>Centre journée :</strong> 9h00 – 17h00</li>
                        <li><strong>Demi-journée :</strong>
                            <ul>
                                <li>Matin : 9h00 – 14h00 maximum</li>
                                <li>Après-midi : de 12h00 ou 13h00 jusqu’à 17h00</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Péri-centre :</strong>{' '}
                            <NavLink to="/Peri" className="lien-telechargement">
                                ➔ Plus d’informations sur le péricentre
                            </NavLink>
                        </li>
                        <li>
                            <strong>Péri-centre :</strong>
                            <NavLink to="/Peri" className="bouton bouton-secondaire ms-2">
                                ➔ En savoir plus
                            </NavLink>
                        </li>


                    </ul>
                    <p>
                        ⏳ <strong>Souplesse assurée :</strong> nous nous adaptons aux besoins des familles pour les horaires et la présence en demi-journée.
                    </p>

                    <h2>Vacances scolaires</h2>
                    <p>
                        Accueil à la journée, pendant toutes les vacances scolaires.<br />
                        En été, le centre est ouvert durant les trois premières semaines de juillet et les deux dernières semaines d’août.
                    </p>

                    <h2>Restauration</h2>
                    <p>
                        Un repas chaud est préparé chaque jour par Sandra, notre cuisinière du restaurant scolaire.<br />
                        Un pique-nique est proposé une fois par semaine, pendant les vacances scolaires uniquement, selon le programme d'activités.
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
                        <h3>🧒 Accueil de Loisirs </h3>
                        <p>Téléchargez les documents nécessaires à l’inscription :</p>
                        <ul>
                            <li><a href="/docs/DossierInscription.pdf" className="lien-telechargement" download>Dossier d’inscription</a></li>
                            <li><a href="/docs/FicheSanitaire.pdf" className="lien-telechargement" download>Fiche sanitaire</a></li>
                            <li><a href="/docs/ReglementInterieurPeriCentre.pdf" className="lien-telechargement" download>Règlement intérieur</a></li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Centre;
