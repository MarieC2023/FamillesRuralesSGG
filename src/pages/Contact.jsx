import React from "react";
import "./contact.css";
import FormulaireContact from "../components/partials/FormulaireContact";

const Contact = () => {
    return (
        <section className="contact-section">
            <h1 className="text-center mb-5">Contactez-nous</h1>

            <div className="intro-contact">
                <div className="intro-photo placeholder">
                    Photo à venir
                </div>

                <div className="intro-texte">
                    <p>Merci de sélectionner le formulaire qui correspond à votre demande :</p>

                    <p>
                        <strong>Formulaire Périscolaire / Centre de loisirs :</strong><br />
                        Pour toute question concernant les horaires, inscriptions, fonctionnement ou pour toute proposition de participation à la vie de l’association (engagement bénévole).
                    </p>

                    <p>
                        <strong>Formulaire Cantine :</strong><br />
                        Pour toute question relative aux repas, menus, inscriptions ou fonctionnement de la cantine.
                    </p>
                </div>
            </div>

            <h2>Formulaires</h2>
            <div className="formulaires-container">
                <FormulaireContact
                    id="peri"
                    titre="Périscolaire / Centre de loisirs"
                    action="https://formspree.io/f/xzbnwkpy" // <-- Modifier ici avec URL Formspree périscolaire
                />
                <FormulaireContact
                    id="resto"
                    titre="Restaurant scolaire"
                    action="https://formspree.io/f/xzbnwkpy" // <-- Modifier ici avec URL Formspree cantine
                />
            </div>

            <h2>Rappel des coordonnées</h2>
            <div className="coordonnees-container">
                <div className="carte-activite">
                    <h3>Périscolaire / Centre de loisirs</h3>
                    <p><strong>Téléphone :</strong> <span className="coord-highlight">02 41 29 13 09</span></p>
                    <p>
                        <strong>Email :</strong>{" "}
                        <br />
                        <a href="mailto:ocom3pommes@hotmail.fr" className="coord-link">
                            ocom3pommes@hotmail.fr
                        </a>
                    </p>
                </div>

                <div className="carte-activite">
                    <h3>Restaurant scolaire</h3>
                    <p><strong>Téléphone :</strong> <span className="coord-highlight">02 41 62 92 64</span></p>
                    <p>
                        <strong>Email :</strong>{" "}
                        <br />
                        <a href="mailto:alabonnefourchette49@gmail.com" className="coord-link">
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
                        {/* Icônes SVG Facebook et Instagram */}
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
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403.59.207 1.012.457 1.457.902.445.445.695.867.902 1.457.163.458.349 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a3.61 3.61 0 01-.902 1.457 3.61 3.61 0 01-1.457.902c-.458.163-1.258.349-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a3.61 3.61 0 01-1.457-.902 3.61 3.61 0 01-.902-1.457c-.163-.458-.349-1.258-.403-2.428C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428a3.61 3.61 0 01.902-1.457 3.61 3.61 0 011.457-.902c.458-.163 1.258-.349 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.157 0-3.522.012-4.768.07-1.002.046-1.547.216-1.908.36a2.805 2.805 0 00-1.017.663 2.805 2.805 0 00-.663 1.017c-.144.361-.314.906-.36 1.908-.058 1.246-.07 1.611-.07 4.768s.012 3.522.07 4.768c.046 1.002.216 1.547.36 1.908.162.432.381.807.663 1.017.21.282.585.501 1.017.663.361.144.906.314 1.908.36 1.246.058 1.611.07 4.768.07s3.522-.012 4.768-.07c1.002-.046 1.547-.216 1.908-.36a2.805 2.805 0 001.017-.663 2.805 2.805 0 00.663-1.017c.144-.361.314-.906.36-1.908.058-1.246.07-1.611.07-4.768s-.012-3.522-.07-4.768c-.046-1.002-.216-1.547-.36-1.908a2.805 2.805 0 00-.663-1.017 2.805 2.805 0 00-1.017-.663c-.361-.144-.906-.314-1.908-.36-1.246-.058-1.611-.07-4.768-.07zm0 3.838a5.999 5.999 0 100 12 5.999 5.999 0 000-12zm0 1.838a4.161 4.161 0 110 8.322 4.161 4.161 0 010-8.322zm6.406-1.845a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
