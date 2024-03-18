import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const Footer = () => {
  const [isSun, setIsSun] = useState(true);

  const handleLinkClick = () => {
    gsap.to(window, {
      duration: 0,
      scrollTo: 0,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="footer-container" id="footer">
      <div
        className="footer"
        style={{ backgroundColor: isSun ? "white" : "black" }}
      >
        <div className="sun-night" onClick={() => setIsSun(!isSun)}>
          <img className=" link-cursor"
            src={
              isSun
                ? "./assets/img/soleil.svg"
                : "./assets/img/icons8-symbole-de-la-lune-60.png"
            }
            alt="sun-moon-tyKlouyou"
            style={{ filter: isSun ? "invert(100%)" : "" }}
          />
        </div>
        <div
          className="logo-container"
          style={{
            color: isSun ? "black" : "white",
            boxShadow: isSun
              ? "inset 0 0 10px rgba(0, 0, 0, 0.151)"
              : " 0 0 15px rgba(255, 255, 255, 0.25)",
          }}
        >
          <h3>
            Designed by{" "}
            <a className=" link-cursor" href="#" style={{ color: isSun ? "black" : "white" }}>
              MINO
            </a>
          </h3>
          <p>création de site web design</p>
          <a className=" link-cursor" href="#" style={{ color: isSun ? "black" : "white" }}>
            en savoir plus
          </a>
        </div>
        <div className="link-container">
          <ul className="legal" style={{ color: isSun ? "black" : "white" }}>
            <li className=" link-cursor">Règlement Intérieur</li>
            <li className=" link-cursor">Mentions légales</li>
            <li className=" link-cursor">© Mino design 2024</li>
          </ul>
          <ul className="pages">
            <NavLink
              to="/"
              style={{ color: isSun ? "black" : "white" }}
              onClick={handleLinkClick}
            >
              <li  className=" link-cursor">Accueil</li>
            </NavLink>
            <NavLink
              to="/photos"
              style={{ color: isSun ? "black" : "white" }}
              onClick={handleLinkClick}
            >
              <li className=" link-cursor">Photos</li>
            </NavLink>
            <NavLink
              to="/activity"
              style={{ color: isSun ? "black" : "white" }}
              onClick={handleLinkClick}
            >
              <li className=" link-cursor">Activités</li>
            </NavLink>
            <NavLink
              to="/contact"
              style={{ color: isSun ? "black" : "white" }}
              onClick={handleLinkClick}
            >
              <li className=" link-cursor">Contact</li>
            </NavLink>
          </ul>
          <div className="btn">
            <NavLink to="/contact" onClick={handleLinkClick}>
              <button className=" link-cursor">Contactez Ty Klouyou</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
