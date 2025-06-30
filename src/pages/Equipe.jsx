import React from 'react';
import { NavLink } from 'react-router-dom';
import '@partials/buttons.css';
import '@partials/links.css';
import './equipe.css';

import benevoles from '@/assets/benevoles.webp';
import benevoles2 from '@/assets/benevoles2.webp';


const Equipe = () => {
    return (
        <div className="wrapper equipe-page">
            <h1 className="text-center mb-5">
                Rejoignez l’équipe des bénévoles !
            </h1>

            <section className="equipe-section d-flex flex-column flex-md-row align-items-start gap-5">
                <div className="equipe-image">
                    
                     <img
                        src={benevoles2}
                        alt="Illustration bénévoles"
                        className="img-fluid rounded"
                    />
                    <img
                        src={benevoles}
                        alt="Illutration bénévoles"
                        className="img-fluid rounded"
                    />
                </div>


                {/* Colonne texte */}
                <div className="equipe-texte">
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

                    <NavLink to="/Contact" className="bouton mt-4">Nous contacter</NavLink>
                </div>
            </section>
        </div>
    );
};

export default Equipe;
