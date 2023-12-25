import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="signature">
          <div className="title">
            <h2>WebLuxury Design</h2>
          </div>
          <p>
            site créé par l'agence <span>WebLuxury</span>
          </p>
          <p className="slogan">website creation and design</p>
          <button>En savoir plus</button>
        </div>
        <form className="contact">
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénom" />
          <textarea placeholder="Pntrez un message..."></textarea>
          <input type="email" placeholder="Email" />
          <input type="submit" value="Envoyez" />
        </form>

        <div className="footer-infos">
          <ul>
            <li>
              <a href="#">réservation</a>
            </li>
            <li>
              <a href="#">activitées</a>
            </li>
            <li>
              <a href="#">informations</a>
            </li>
            <li>
              <a href="#">Politique de confidentialité</a>
            </li>
            <li>
              <a href="#">© WebLuxury Design</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-text">
        <p>WebLuxury Design</p>
      </div>
    </div>
  );
};

export default Footer;
