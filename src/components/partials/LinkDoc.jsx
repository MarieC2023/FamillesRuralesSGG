import React from "react";
import "./links.css"; 

const LinkDoc = ({ href, label }) => {
  return (
    <a href={href} className="lien-telechargement" download>
      {label}
    </a>
  );
};

export default LinkDoc;
