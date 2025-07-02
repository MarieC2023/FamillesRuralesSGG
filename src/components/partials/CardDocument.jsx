import React from "react";
import LinkDoc from "./LinkDoc";
import "./card.css";

const CardDocument = ({ emoji, titre, description, fichiers }) => {
  return (
    <div className="carte-activite">
      <h3>{emoji} {titre}</h3>
      <p>{description}</p>
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
