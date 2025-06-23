import React from 'react';
import { NavLink } from 'react-router-dom';
import '@partials/buttons.css';
import '@partials/links.css';
import './peri.css';

const Peri = () => {
    return (
        <div className="wrapper periscolaire-page">
            <h1 className="page-title text-center mb-5">
                Périscolaire – Péricentre
            </h1>

            <section className="periscolaire-section d-flex flex-column flex-md-row align-items-start gap-5">
                {/* Colonne image */}
                <div className="periscolaire-image placeholder">
                    <div className="img-placeholder">Photo du périscolaire à venir</div>
                </div>

                {/* Colonne texte */}
                <div className="periscolaire-texte">
                    <p>
                        L’accueil périscolaire de Saint Georges des Gardes est déclaré auprès 
                        de la Direction Départementale de la Cohésion Sociale (DDCS) et 
                        respecte la réglementation en vigueur. 
                        Il bénéficie également du soutien de la Protection Maternelle et Infantile (PMI).
                    </p>
                    <p>
                        Il répond aux besoins des familles dont les contraintes professionnelles ne coïncident 
                        pas toujours avec les horaires scolaires, en offrant un cadre sécurisé, 
                        convivial et souple.
                    </p>
                     <p>
                        Ce temps d’accueil permet aux enfants de se retrouver dans un lieu qu’ils peuvent 
                        s’approprier, propice à la détente, au jeu et à la socialisation, 
                        sous l’encadrement d’une équipe diplômée et bienveillante.
                    </p>

                    <h2>Horaires d’accueil</h2>
                    <ul>
                        <li><strong>Lundi, mardi, jeudi, vendredi :</strong><br />
                            Matin : 7h00 – 8h30<br />
                            Soir : 16h30 – 19h00
                        </li>
                        <li><strong>Mercredis — Péri-centre uniquement :</strong><br />
                            Matin : 7h30 – 9h00<br />
                            Soir : 17h00 – 19h00
                        </li>
                    </ul>

                    <h2>Encadrement</h2>
                    <p>
                        L’équipe pédagogique est qualifiée pour garantir un accueil de qualité, adapté aux besoins des enfants.
                    </p>

                    <NavLink to="/Contact" className="bouton mt-4">Nous contacter</NavLink>
                </div>
            </section>

             <section className="documents-section mt-5">
                <h2>Documents pour inscriptions</h2>
                <div className="documents d-flex flex-column flex-md-row justify-content-between gap-4">
                    <div className="carte-activite">
                        <h3>🧒 Périscolaire</h3>
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

export default Peri;
