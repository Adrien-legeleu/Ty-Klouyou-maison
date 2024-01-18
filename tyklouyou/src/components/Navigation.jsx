import React from "react";
import { NavLink } from "react-router-dom";

const Navgiation = ({ navigationShow }) => {
  return (
    <div
      className={`${
        navigationShow
          ? "navigation-container menu-animation-open"
          : "navigation-container menu-animation-close"
      }`}
    >
      <div className="navigation-menu">
        <NavLink
          to="/"
          className={`${
            navigationShow ? "menu menu1-anim-open" : "menu menu1-anim-close"
          }`}
          style={{ visibility: navigationShow ? "hidden" : "visible" }}
        >
          <h2>Accueil</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="arrow-left" />
        </NavLink>
        <NavLink to="/"
          className={`${
            navigationShow ? "menu menu2-anim-open" : "menu menu2-anim-close"
          }`}
          style={{
            visibility: navigationShow ? "hidden" : "visible",
            transform: navigationShow ? "rotate(0)" : "rotate(20deg)",
          }}
        >
          <h2>Photos</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="arrow-left" />
        </NavLink>
        <NavLink to="/activity"
          className={`${
            navigationShow ? "menu menu3-anim-open" : "menu menu3-anim-close"
          }`}
          style={{
            visibility: navigationShow ? "hidden" : "visible",
            transform: navigationShow ? "rotate(0)" : "rotate(-30deg)",
          }}
        >
          <h2>Activités</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="arrow-left" />
        </NavLink>
        <NavLink
          className={`${
            navigationShow ? "menu menu4-anim-open" : "menu menu4-anim-close"
          }`}
          style={{ visibility: navigationShow ? "hidden" : "visible" }}
        >
          <h2>Contactez</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="arrow-left" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navgiation;
