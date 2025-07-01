import React from 'react';
import { NavLink } from 'react-router-dom';
import '@partials/buttons.css';
import '@partials/links.css';
import './centre.css';

import { Helmet } from "react-helmet";

import BlocImageTexte from '@partials/BlocImageTexte';

import entreePeri from '@/assets/entreePeri.webp';
import intPeri from '@/assets/peri1.webp';
import extPeri from '@/assets/peri2.webp';

import PlanningCarrousel from '@partials/PlanningCarrousel';

import merc1 from '@/assets/planning/merc1.webp';
import merc2 from '@/assets/planning/merc2.webp';
import vac1 from '@/assets/planning/vac1.webp';
import vac2 from '@/assets/planning/vac2.webp';
import vac3 from '@/assets/planning/vac3.webp';
import vac4 from '@/assets/planning/vac4.webp';

const Centre = () => {
    return (
        <div className="wrapper centre-page">

            <Helmet>
                <title>Centre de loisirs - Familles Rurales Saint-Georges-des-Gardes</title>
                <meta
                    name="description"
                    content="Découvrez les activités du centre de loisirs de 
                    Saint-Georges-des-Gardes pour les enfants pendant les vacances 
                    scolaires et les mercredis."
                />
            </Helmet>

            <h1 className="text-center mb-5">
                Accueil de Loisirs — Mercredi et Vacances scolaires
            </h1>
            {/* Carrousel photos des activités — à intégrer plus tard */}
            {/* <section className="carrousel-photos mt-5">
                <h2>En images</h2>
                <div className="img-placeholder">[Carrousel des photos à venir]</div>
            </section> */}
            <section>
                <BlocImageTexte
                    imageSrc={[entreePeri, intPeri, extPeri]}
                    imageAlt="Locaux périscolaire"
                >
                    <p>
                        Le centre de loisirs accueille les enfants de 3 à 12 ans, tous les mercredis et pendant les vacances scolaires.
                    </p>
                    <p>
                        Encadrés par une équipe d’animateurs diplômés, les enfants découvrent chaque semaine des activités variées :
                        jeux collectifs, ateliers créatifs, sorties, temps calmes...
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

                </BlocImageTexte>
                <div className="text-center mt-4">
                    <NavLink to="/Contact" className="bouton">Nous contacter</NavLink>
                </div>
                
            </section>
            {/* Visuels planning activités */}
            <section className="plannings mt-5">
                <h2>Nos plannings d’activités</h2>
                <div className="plannings-container d-flex justify-content-center  flex-wrap">
                    <PlanningCarrousel
                        titre="Planning des mercredis"
                        images={[merc1, merc2]}
                    />
                    <PlanningCarrousel
                        titre="Planning des vacances scolaires"
                        images={[vac1, vac2, vac3, vac4]}
                    />
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
                            <li><a href="/docs/ReglementInterieurCentre.pdf" className="lien-telechargement" download>Règlement intérieur de l'accueil de loisirs</a></li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Centre;
