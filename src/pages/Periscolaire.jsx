import React from 'react';
import { NavLink } from 'react-router-dom';

import './peri.css';

import { Helmet } from "react-helmet";

import intPeri from '@/assets/peri1.webp';
import extPeri from '@/assets/peri2.webp';

import BlocImageTexte from '@partials/BlocImageTexte';
import Buttons from '@partials/Buttons';
import CardDocument from "@partials/CardDocument";


const Peri = () => {
    return (
        <div className="wrapper periscolaire-page">
            <Helmet>
                <title>Périscolaire - Familles Rurales Saint-Georges-des-Gardes</title>
                <meta
                    name="description"
                    content="Infos sur l'accueil périscolaire à Saint-Georges-des-Gardes&nbsp;: 
                    horaires, encadrement, activités proposées aux enfants avant et après l'école."
                />
            </Helmet>

            <h1 className="text-center mb-5">
                Périscolaire – Péricentre
            </h1>

            <section>
                <BlocImageTexte
                    imageSrc={[intPeri, extPeri]}
                    imageAlt="Photos des locaux périscolaires"
                >
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
                        <li><strong>Lundi, mardi, jeudi, vendredi&nbsp;:</strong><br />
                            Matin&nbsp;: 7h00 – 8h30<br />
                            Soir&nbsp;: 16h30 – 19h00
                        </li>
                        <li><strong>Mercredis — Péri-centre uniquement&nbsp;:</strong><br />
                            Matin&nbsp;: 7h30 – 9h00<br />
                            Soir&nbsp;: 17h00 – 19h00
                        </li>
                    </ul>

                    <h2>Encadrement</h2>
                    <p>
                        L’équipe pédagogique est qualifiée pour garantir un accueil de qualité, adapté aux besoins des enfants.
                    </p>

                </BlocImageTexte>
                <div className="text-center">
                    <Buttons to="/Contact">Nous contacter</Buttons>
                </div>
            </section>

            <section className="documents-section mt-5">
                <h2>Documents pour inscriptions</h2>

                <div className="documents d-flex flex-column flex-md-row justify-content-between gap-4">
                    <CardDocument
                        emoji="🧒"
                        titre="Périscolaire"
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
                                href: "/docs/ReglementInterieurPeri.pdf",
                                label: "Règlement intérieur de la périscolaire",
                            },
                        ]}
                    />
                </div>
            </section>

        </div>
    );
};

export default Peri;
