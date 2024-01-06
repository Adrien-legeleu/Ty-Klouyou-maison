import React from "react";
import { NavLink } from "react-router-dom";

const Navgiation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <div className="navigation-sun">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navigation-menu">
          <NavLink to="/" className="menu">
            <h2>Accueil</h2>
          </NavLink>
          <NavLink className="menu">
            <h3>Photos</h3>
          </NavLink>
          <NavLink className="menu">
            <h3>Activités</h3>
          </NavLink>
          <NavLink className="menu">
            <h3>Contactez</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navgiation;
