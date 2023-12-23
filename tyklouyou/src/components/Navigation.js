import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <em>
          <span>Ty</span>Klouyou
        </em>
      </div>
      <div className="nav">
        <ul className="nav-lists">
          <NavLink to="/" className="nav-list">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/" className="nav-list">
            <li>Photos</li>
          </NavLink>
          <NavLink to="/" className="nav-list">
            <li>Activités</li>
          </NavLink>
          <NavLink to="/" className="nav-list">
            <li
              className="
          nav-reservation"
            >
              Réservez
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="contact">
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Navigation;
