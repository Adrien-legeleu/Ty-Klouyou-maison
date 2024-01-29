import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div className="contact-container">
      <Header />
      <div className="contact">
        <div className="contact-form">
            <form className="form">
          <input type="text" placeholder="prénom" />
          <input type="text" placeholder="nom" />
          <input type="text" placeholder="e-mail" />
          <input type="text" placeholder="téléphone" />
          <div className="date">
            <p>Départ / Arrivée : </p>
            <input type="date" />
            <input type="date" />
          </div>
          <textarea placeholder="entrez un message"></textarea>
          <div className="btn">
            <button type="submit">Envoyer</button>
          </div>
        </form>
        </div>
        <div className="contact-text">
          <div className="title">
            <h1>Contactez-nous !</h1>
            <h2>et passez vos meilleures vacances !</h2>
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
          <ul className="info-legal">
            <li>Règlement Intérieur</li>
            <li>Mentions légales</li>
            <li>© WebLuxury Design 2024</li>
          </ul>
        </div>
      </div>
      <span className="signature">designed by WebLuxury</span>
    </div>
  );
};

export default Contact;
