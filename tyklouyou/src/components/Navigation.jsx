import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/" className={`menu ${navigationShow ? "menu1-anim-open" : "menu1-anim-close" } `} style={{ visibility: !navigationShow ? "visible" : "hidden"}} >
          <h2>Accueil</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
        <NavLink to="/photos" className={`menu ${navigationShow ? "menu2-anim-open" : "menu2-anim-close" } `}  style={{ visibility: !navigationShow ? "visible" : "hidden"}}>
          <h2>Photos</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
        <NavLink to="/activity" className={`menu ${navigationShow ? "menu3-anim-open" : "menu3-anim-close" } `}  style={{ visibility: !navigationShow ? "visible" : "hidden"}}>
          <h2>Activités</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
        <NavLink to="/contact" className={`menu ${navigationShow ? "menu4-anim-open" : "menu4-anim-close" } `}  style={{ visibility: !navigationShow ? "visible" : "hidden"}}>
          <h2>Contactez</h2>
          <img src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
