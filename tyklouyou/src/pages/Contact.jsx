import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { gsap } from "gsap";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  const [calendarOpacity, setCalendarOpacity] = useState(1);
  const [isInfo , setIsInfo] = useState(false)


  return (
    <div className="contact-container">
      <Header />
      <div className="contact">
        <div className="contact-form">
          <form className="form">
            <div className="input">
              <input type="text" placeholder="Prénom" />
            </div>
            <div className="input">
              <input type="text" placeholder="Nom" />
            </div>
            <div className="input">
              <input type="text" placeholder="E-mail" />
            </div>
            <div className="input">
              <input type="text" placeholder="Téléphone" />
            </div>

            <div className="stay-container">
              <p
                className={`text-visible ${isInfo ? "anim-info-visible" : "anim-info-hidden"}  `} onClick={()=>setIsInfo(!isInfo)}
              >
                Informations sur votre séjour
              </p>
              <div className="stay" >
                <div className="stay-date">
                  <p>Départ / Arrivée : </p>
                  <div className="date-content">
                    <span>15/01/24</span>
                    <span>28/01/24</span>
                  </div>
                  <div className="stay-price">
                    <p>prix:</p>
                    <p>450$</p>
                  </div>
                </div>
                <div className="btn-date">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsActive(true);
                      setCalendarOpacity(1);
                    }}
                  >
                    Changer date
                  </button>
                </div>
              </div>
            </div>
            <textarea placeholder="Entrez un message"></textarea>
            <div className="btn">
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
        <div className="contact-text">
          <div className="title">
            <h1>Contactez-nous !</h1>
          </div>
          <div className="text">
            <p>
              Toutes les informations nécessaires, regroupant les détails sur
              l'accès et la localisation précise, seront communiquées après la
              finalisation du paiement.
            </p>
            <p>
              Nous vous invitons à entrer en contact avec le propriétaire pour
              avancer dans le processus de paiement, qui sera effectué une fois
              que le propriétaire aura pris connaissance de votre message.
            </p>
          </div>
        </div>
      </div>
          <ul className="info-legal">
            <li>Règlement Intérieur</li>
            <li>Mentions légales</li>
            <li>© WebLuxury Design 2024</li>
          </ul>
      <span className="signature">designed by WebLuxury</span>
      <Calendar
        isActive={isActive}
        setIsActive={setIsActive}
        calendarOpacity={calendarOpacity}
        setCalendarOpacity={setCalendarOpacity}
      />
      <Footer className="footer-container" />
    </div>
  );
};

export default Contact;
