import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <form className="contact-form">
          <input type="text" placeholder="prénom" />
          <input type="text" placeholder="nom" />
          <input type="text" placeholder="e-mail" />
          <input type="text" placeholder="téléphone" />
          <div className="date">
            <p>Départ / Arrivée</p>
            <input type="date" />
            <input type="date" />
          </div>
          <textarea placeholder="entrez un message"></textarea>
          <button type="submit">Envoyer</button>
        </form>
        <div className="contact-text">
          <div className="title">
            <h1>Contactez-nous !</h1>
            <h2>et passez vos meilleures vacances !</h2>
          </div>
          <p>
            Toutes les informations nécessaires, regroupant les détails sur
            l'accès et la localisation précise, seront communiquées après la
            finalisation du paiement. Nous vous invitons à entrer en contact
            avec le propriétaire pour avancer dans le processus de paiement, qui
            sera effectué une fois que le propriétaire aura pris connaissance de
            votre message.
          </p>
          <div className="contact-info">
            <div className="logo-site">
              <span>
                Vous aussi, créez votre site web et partagez votre passion en
                ligne!
              </span>
              <a href="#">en savoir plus</a>
            </div>
            <ul className="info-legal">
              <li>Règlement Intérieur</li>
              <li>Mentions légales</li>
              <li>© WebLuxury Design 2024</li>
            </ul>
          </div>
        </div>
      </div>
      <span className="signature">designed by WebLuxury</span>
    </div>
  );
};

export default Contact;
