// @components/BoutonLien.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import '@partials/buttons.css';


const Buttons = ({ to, children, className = "" }) => {
  return (
    <div className={`mt-4 ${className}`}>
      <NavLink to={to} className="bouton">
        {children}
      </NavLink>
    </div>
  );
};

export default Buttons;
