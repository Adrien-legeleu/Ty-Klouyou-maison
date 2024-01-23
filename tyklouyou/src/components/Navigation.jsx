import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = ({ navigationShow }) => {


  return (
    <div
      className={`${
        navigationShow
          ? "navigation-container menu-animation-open"
          : "navigation-container menu-animation-close"
      }`}
    >
      <div className="navigation-menu">
        <NavLink to="/" className="menu" >
          <h2>Accueil</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
        <NavLink to="/photos" className="menu" >
          <h2>Photos</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
        <NavLink to="/activity" className="menu">
          <h2>Activités</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
        <NavLink to="/contact" className="menu" >
          <h2>Contactez</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
