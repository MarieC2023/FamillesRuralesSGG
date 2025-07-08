import React from 'react';
import { NavLink } from 'react-router-dom';

import './resto.css';

import { Helmet } from "react-helmet";

import Buttons from '@partials/Buttons';
import BlocImageTexte from '@partials/BlocImageTexte';
import CardDocument from "@partials/CardDocument";
import PlanningCarrousel from '@partials/PlanningCarrousel';

import extCantine from '@/assets/cantine.webp';
import intCantine from '@/assets/cantine2.webp';
import menu from '@/assets/menu/menu.webp';
import allergenes from '@/assets/menu/allergenes.webp';

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

            <section>
                <BlocImageTexte
                    imageSrc={extCantine}
                    imageAlt="Photos du restaurant scolaire"
                >
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
                </BlocImageTexte>

                <div className="text-center">
                    <Buttons to="/Contact">Nous contacter</Buttons>
                </div>

            </section>
            {/* Visuels planning activités */}
            <section className="plannings mt-5">
                <h2>Menus et allergènes</h2>
                <div className="plannings-container d-flex justify-content-center  flex-wrap">
                    <PlanningCarrousel
                        titre="Menu de la semaine"
                        images={[menu]}
                    />
                    <PlanningCarrousel
                        titre="Tableau des allergènes"
                        images={[allergenes]}
                    />
                </div>
            </section>
            {/* Documents d’inscription */}
            <section className="documents-section mt-5">
                <h2>Documents pour inscriptions</h2>

                <div className="documents d-flex flex-column flex-md-row justify-content-between gap-4 align-items-start">

                    <CardDocument
                        emoji="🍽️"
                        titre="Restaurant scolaire"
                        description="Téléchargez les documents nécessaires à l’inscription :"
                        fichiers={[
                            {
                                href: "/docs/BulletinInscriptionCantine.pdf",
                                label: "Bulletin d’inscription cantine",
                            },
                            {
                                href: "/docs/ReglementInterieur.pdf",
                                label: "Règlement intérieur",
                            },
                        ]}
                    />

                    <img
                        src={intCantine}
                        alt="Salle intérieure du restaurant scolaire"
                        className="img-fluid rounded resto-img-doc"
                    />
                </div>
            </section>

        </div>
    );
};

export default RestaurantScolaire;
