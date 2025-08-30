import React from 'react';
import { NavLink } from 'react-router-dom';

import './centre.css';

import { Helmet } from "react-helmet";

import Buttons from '@partials/Buttons';
import BlocImageTexte from '@partials/BlocImageTexte';
import PlanningCarrousel from '@partials/PlanningCarrousel';
import CardDocument from "@partials/CardDocument"; 

import entreePeri from '@/assets/entreePeri.webp';
import intPeri from '@/assets/peri1.webp';
import extPeri from '@/assets/peri2.webp';

import merc1 from '@/assets/planning/merc1.webp';
import merc2 from '@/assets/planning/merc2.webp';
// import vac1 from '@/assets/planning/vac1.webp';
// import vac2 from '@/assets/planning/vac2.webp';
// import vac3 from '@/assets/planning/vac3.webp';
// import vac4 from '@/assets/planning/vac4.webp';

const Centre = () => {
    return (
        <div className="wrapper centre-page">

            <Helmet>
                <title>Centre de loisirs - Familles Rurales Saint-Georges-des-Gardes</title>
                <meta
                    name="description"
                    content="Découvrez les activités du centre de loisirs de&nbsp; 
                    Saint-Georges-des-Gardes pour les enfants pendant les vacances&nbsp; 
                    scolaires et les mercredis."
                />
            </Helmet>

            <h1 className="text-center mb-5">
                Accueil de Loisirs — Mercredi et Vacances scolaires
            </h1>

            <section>
                <BlocImageTexte
                    imageSrc={[entreePeri, intPeri, extPeri]}
                    imageAlt="Locaux périscolaire"
                >
                    <p>
                        Le centre de loisirs accueille les enfants de 3 à 12&nbsp;ans, tous les mercredis et pendant les vacances scolaires.
                    </p>
                    <p>
                        Encadrés par une équipe d’animateurs diplômés, les enfants découvrent chaque semaine des activités variées&nbsp;:
                        jeux collectifs, ateliers créatifs, sorties, temps calmes...
                    </p>
                    <p>
                        <strong>L’objectif&nbsp;:</strong> favoriser leur épanouissement, leur créativité et leur autonomie dans un cadre bienveillant.
                    </p>

                    <h2>Mercredis&nbsp;: plusieurs formules possibles</h2>
                    <ul>
                        <li><strong>Centre journée&nbsp;:</strong> 9h00 – 17h00</li>
                        <li><strong>Demi-journée&nbsp;:</strong>
                            <ul>
                                <li>Matin&nbsp;: 9h00 – 14h00 maximum</li>
                                <li>Après-midi&nbsp;: de 12h00 ou 13h00 jusqu’à 17h00</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Péri-centre&nbsp;:</strong>{' '}
                            <NavLink to="/Peri" className="lien-telechargement">
                                ➔ Plus d’informations sur le péricentre
                            </NavLink>
                        </li>
                    </ul>
                    <p>
                        ⏳ <strong>Souplesse assurée&nbsp;:</strong> nous nous adaptons aux besoins des familles pour les horaires et la présence en demi-journée.
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

                <div className="text-center">
                    <Buttons to="/Contact">Nous contacter</Buttons>
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
                    {/* <PlanningCarrousel
                        titre="Planning des vacances scolaires"
                        images={[vac1, vac2, vac3, vac4]}
                    /> */}
                </div>
            </section>

            {/* Documents d’inscription */}
            <section className="documents-section mt-5">
                <h2>Documents pour inscriptions</h2>

                <div className="documents d-flex flex-column flex-md-row justify-content-between gap-4">
                    <CardDocument
                        emoji="🧒"
                        titre="Accueil de Loisirs"
                        description="Téléchargez les documents nécessaires à l’inscription&nbsp;:"
                        fichiers={[
                            {
                                href: "/docs/DossierInscription.pdf",
                                label: "Dossier d’inscription",
                            },
                            {
                                href: "/docs/FicheSanitaire.pdf",
                                label: "Fiche sanitaire",
                            },
                            {
                                href: "/docs/ReglementInterieurCentre.pdf",
                                label: "Règlement intérieur de l'accueil de loisirs",
                            },
                        ]}
                    />
                </div>
            </section>

        </div>
    );
};

export default Centre;
