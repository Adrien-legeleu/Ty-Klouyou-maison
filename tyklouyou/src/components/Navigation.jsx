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
        <NavLink to="/" className={`menu  link-cursor ${navigationShow ? "menu1-anim-open" : "menu1-anim-close" } `} style={{ visibility: !navigationShow ? "visible" : "hidden"}} >
          <h2 className=" link-cursor">Accueil</h2>
          <img className=" link-cursor" src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
        <NavLink to="/photos" className={`menu link-cursor ${navigationShow ? "menu2-anim-open" : "menu2-anim-close" } `}  style={{ visibility: !navigationShow ? "visible" : "hidden"}}>
          <h2 className=" link-cursor">Photos</h2>
          <img className=" link-cursor" src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
        <NavLink to="/activity" className={`menu link-cursor ${navigationShow ? "menu3-anim-open" : "menu3-anim-close" } `}  style={{ visibility: !navigationShow ? "visible" : "hidden"}}>
          <h2 className=" link-cursor">Activités</h2>
          <img className=" link-cursor" src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
        <NavLink to="/contact" className={`menu link-cursor ${navigationShow ? "menu4-anim-open" : "menu4-anim-close" } `}  style={{ visibility: !navigationShow ? "visible" : "hidden"}}>
          <h2 className=" link-cursor">Contactez</h2>
          <img className=" link-cursor" src="./assets/img/icons8-arrow-96.png" alt="flèche gauche" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
