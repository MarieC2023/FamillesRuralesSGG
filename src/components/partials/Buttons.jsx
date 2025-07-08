
import React from "react";
import { NavLink } from "react-router-dom";
import '@partials/buttons.css';

const addNbspBeforePunct = (text) => {
  if (typeof text !== 'string') return text;
  return text
    .replace(/ ([!:?])/g, '\u00A0$1'); // espace insécable avant :, !, ?
};

const Buttons = ({ to, children, className = "" }) => {
  
  const processedChildren = typeof children === "string" ? addNbspBeforePunct(children) : children;

  return (
    <div className={`mt-4 ${className}`}>
      <NavLink to={to} className="bouton">
        {processedChildren}
      </NavLink>
    </div>
  );
};

export default Buttons;
