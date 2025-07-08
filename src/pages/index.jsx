import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";

import BlocImageTexte from '@partials/BlocImageTexte';
import Buttons from '@partials/Buttons';
import CardDocument from "@partials/CardDocument";

import entreePeri from '@/assets/entreePeri.webp';

import './index.css';

const Index = () => {
    return (
        <div className="wrapper homepage">
            <Helmet>
                <title>Accueil - Familles Rurales Saint-Georges-des-Gardes</title>
                <meta
                    name="description"
                    content="Bienvenue sur le site de Familles Rurales de Saint-Georges-des-Gardes. 
                    Découvrez nos services périscolaires, nos activités et notre engagement local."
                />
            </Helmet>

            {/* Titre seul, au-dessus */}
            <h1 className="text-center mb-5">
                Un lieu d’accueil convivial pour les enfants de Saint-Georges-des-Gardes
            </h1>

            <BlocImageTexte
                imageSrc={entreePeri}
                imageAlt="Entrée de la périscolaire"
            >
                <p>
                    Ici, nous accompagnons les familles au quotidien en proposant des services adaptés aux enfants de 3 à 12 ans&nbsp;: 
                    accueil périscolaire, centre de loisirs, restaurant scolaire, et bien plus encore.
                </p>
                <p>
                    <strong>Notre mission&nbsp;?</strong> Offrir aux enfants un cadre sécurisé, convivial et épanouissant, tout en
                    soutenant les parents dans l’organisation de leur quotidien.
                </p>
                <p>
                    <strong>Nos équipes</strong>, composées de professionnels et de bénévoles engagés, œuvrent chaque jour pour
                    proposer des activités enrichissantes, des repas équilibrés et un accueil chaleureux.
                </p>
                <p>
                    ➡️ Envie d’en savoir plus&nbsp;? Découvrez nos différentes pages et rejoignez l’aventure Familles Rurales&nbsp;!
                </p>
            </BlocImageTexte>

            {/* Programmes */}
            <section className="programmes">
                <h2>Nos programmes d’activités</h2>
                <Buttons to="/AccueilDeLoisirs">→ Voir la page Accueil de Loisirs</Buttons>
            </section>

            {/* Cartes documents */}
            <section className="documents-section mt-5">
                <h2>Documents pour inscriptions</h2>

                <div className="documents d-flex flex-column flex-md-row justify-content-between gap-4">
                    <CardDocument
                        emoji="🧒"
                        titre="Accueil de Loisirs / Périscolaire"
                        description="Téléchargez les documents nécessaires à l’inscription&nbsp;:"
                        fichiers={[
                            { href: "/docs/DossierInscription.pdf", label: "Dossier d’inscription" },
                            { href: "/docs/FicheSanitaire.pdf", label: "Fiche sanitaire" }
                        ]}
                    />

                    <CardDocument
                        emoji="🍽️"
                        titre="Restaurant scolaire"
                        description="Téléchargez les documents nécessaires à l’inscription&nbsp;:"
                        fichiers={[
                            { href: "/docs/BulletinInscriptionCantine.pdf", label: "Bulletin d’inscription cantine" },
                            { href: "/docs/ReglementInterieur.pdf", label: "Règlement intérieur" }
                        ]}
                    />
                </div>
            </section>

            <div className="text-center">
                <Buttons to="/Contact">Nous contacter</Buttons>
            </div>
        </div>
    );
};

export default Index;
