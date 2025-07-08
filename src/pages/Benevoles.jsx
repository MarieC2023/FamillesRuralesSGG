import React from 'react';
import { Helmet } from "react-helmet";
import Buttons from '@partials/Buttons';
import BlocImageTexte from '@partials/BlocImageTexte'; // 👈

import benevoles from '@/assets/benevoles.webp';
import benevoles2 from '@/assets/benevoles2.webp';

import './equipe.css';

const Equipe = () => {
    return (
        <div className="wrapper equipe-page">
            <Helmet>
                <title>Bénévoles - Familles Rurales Saint-Georges-des-Gardes</title>
                <meta
                    name="description"
                    content="Les bénévoles sont au cœur de Familles Rurales. 
                    Découvrez leur rôle, leur engagement et comment rejoindre l’association 
                    à Saint-Georges-des-Gardes."
                />
            </Helmet>

            <h1 className="text-center mb-5">
                Rejoignez l’équipe des bénévoles !
            </h1>

            {/* 👉 Nouveau composant */}
            <BlocImageTexte
                imageSrc={[benevoles, benevoles2]}
                imageAlt="Illustration bénévoles"
                className="bloc-texte-benevoles"
            >
                <p>
                    Vous souhaitez partager vos talents, donner un peu de votre temps et vous engager pour la vie locale ?<br />
                    Devenez bénévole au sein de Familles Rurales Saint-Georges-des-Gardes !
                </p>
                <p>
                    Le bénévolat, c’est avant tout une aventure humaine riche de sens, où solidarité, échange et entraide prennent tout leur sens.
                </p>

                <h2>Pourquoi devenir bénévole ?</h2>
                <ul>
                    <li>Donner du sens à son quotidien</li>
                    <li>Créer des liens avec les habitants de votre territoire</li>
                    <li>Participer à des projets concrets et valorisants</li>
                    <li>S’enrichir personnellement et collectivement</li>
                </ul>

                <h2>Où agir ?</h2>
                <ul>
                    <li>Restaurant scolaire</li>
                    <li>Périscolaire</li>
                    <li>Accueil de loisirs</li>
                    <li>Animations et événements (spectacle de Noël, journée « Gonflée », etc.)</li>
                </ul>

                <h2>Vos questions ?</h2>
                <ul>
                    <li>Vous avez des idées, ou êtes curieux de découvrir celles des autres ?</li>
                    <li>Vous souhaitez vous intégrer localement ?</li>
                    <li>Vous disposez de temps libre ?</li>
                    <li>Vous partagez des valeurs de solidarité et de participation ?</li>
                </ul>

                <h2>Envie d’échanger ?</h2>
                <p>
                    N’hésitez pas à contacter notre équipe de bénévoles ou les salariés de Familles Rurales.<br />
                    Ensemble, faisons vivre notre territoire !<br />
                    À bientôt parmi nous !
                </p>
            </BlocImageTexte>

            <div className="text-center">
                <Buttons to="/Contact">Nous contacter</Buttons>
            </div>
        </div>
    );
};

export default Equipe;
