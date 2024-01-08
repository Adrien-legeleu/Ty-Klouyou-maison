import React from "react";
import { NavLink } from "react-router-dom";

const Navgiation = ({navigationShow}) => {
  return (
    <div className="navigation-container" style={{visibility:navigationShow ? "visible" : "hidden"}}>
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
            <img src="./assets/img/icons8-arrow-96.png" alt="arrow-left" />

          </NavLink>
          <NavLink className="menu">
            <h2>Photos</h2>
            <img src="./assets/img/icons8-arrow-96.png" alt="arrow-left" />

          </NavLink>
          <NavLink className="menu">
            <h2>Activités</h2>
            <img src="./assets/img/icons8-arrow-96.png" alt="arrow-left" />
          </NavLink>
          <NavLink className="menu">
            <h2>Contactez</h2>
            <img src="./assets/img/icons8-arrow-96.png" alt="arrow-left" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navgiation;
