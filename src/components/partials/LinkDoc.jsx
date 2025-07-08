import React from "react";
import "./links.css";

const LinkDoc = ({ href, label }) => {
  // Remplace espace + deux-points par espace insécable + deux-points dans le label
  const labelWithNbsp = label.replace(/ :/g, "\u00A0:");

  return (
    <a href={href} className="lien-telechargement" download>
      {labelWithNbsp}
    </a>
  );
};

export default LinkDoc;
