import React from "react";
import "./contact.css";
import FormulaireContact from "@partials/FormulaireContact";

const Contact = () => {
    return (
        <section className="contact-section">
            <h1 className="text-center mb-5">Contactez-nous</h1>

            <div className="intro-contact">
                <div className="intro-photo placeholder">Photo à venir</div>

                <div className="intro-texte">
                    <p>Merci de sélectionner le formulaire qui correspond à votre demande :</p>
                    <p>
                        <strong>Formulaire Périscolaire / Centre de loisirs :</strong>
                    </p>
                    <p>
                        Pour toute question concernant les horaires, inscriptions,
                        fonctionnement. <br />
                        Pour toute proposition de participation à la vie de l’association
                        (engagement bénévole).
                    </p>
                    <p>
                        <strong>Formulaire Restaurant scolaire :</strong>
                    </p>
                    <p>
                        Pour toute question relative aux repas, menus, inscriptions ou
                        fonctionnement de la restauration scolaire.
                    </p>
                </div>
            </div>

            <h2>Formulaires</h2>
            <div className="formulaires-container">
                <FormulaireContact
                    id="peri"
                    titre="Périscolaire / Centre de loisirs"
                    action="https://formspree.io/f/xzbnwkpy"
                />
                <FormulaireContact
                    id="resto"
                    titre="Restaurant scolaire"
                    action="https://formspree.io/f/xzbnwkpy"
                />
            </div>

            <h2>Rappel des coordonnées</h2>
            <div className="coordonnees-container">
                <div className="carte-activite">
                    <h3>Périscolaire / Centre de loisirs</h3>
                    <p>
                        <strong>Téléphone :</strong>{" "}
                        <span className="coord-highlight">02 41 29 13 09</span>
                    </p>
                    <p>
                        <strong>Email :</strong>
                        <br />
                        <a href="mailto:ocom3pommes@hotmail.fr" className="coord-link">
                            ocom3pommes@hotmail.fr
                        </a>
                    </p>
                </div>

                <div className="carte-activite">
                    <h3>Restaurant scolaire</h3>
                    <p>
                        <strong>Téléphone :</strong>{" "}
                        <span className="coord-highlight">02 41 62 92 64</span>
                    </p>
                    <p>
                        <strong>Email :</strong>
                        <br />
                        <a
                            href="mailto:alabonnefourchette49@gmail.com"
                            className="coord-link"
                        >
                            alabonnefourchette49@gmail.com
                        </a>
                    </p>
                </div>

                <div className="carte-activite contact-reseaux">
                    <h3>Réseaux sociaux</h3>
                    <p>
                        <strong>Suivez-nous sur :</strong>
                    </p>
                    <div className="footer-icons">
                        <a
                            href="https://www.facebook.com/profile.php?id=61568676522423&sfnsn=scwspmo"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="icon-facebook"
                            >
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.instagram.com/familles_rurales_stgdg?utm_source=qr&igsh=YnJiODN3cnJhamJt"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="icon-instagram"
                            >
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
