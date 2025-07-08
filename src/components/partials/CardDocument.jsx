import React from "react";
import LinkDoc from "./LinkDoc";
import "./card.css";

const CardDocument = ({ emoji, titre, description, fichiers }) => {
  // Ajout d'espace insécable avant les deux-points dans description et titre
  // (Si description ne contient pas déjà un espace insécable avant :)
  const descriptionWithNbsp = description.replace(/ :/g, "\u00A0:");
  const titreWithNbsp = titre.replace(/ :/g, "\u00A0:");

  return (
    <div className="carte-activite">
      <h3>{emoji} {titreWithNbsp}</h3>
      <p>{descriptionWithNbsp}</p>
      <ul>
        {fichiers.map((fichier, index) => (
          <li key={index}>
            <LinkDoc href={fichier.href} label={fichier.label} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardDocument;
