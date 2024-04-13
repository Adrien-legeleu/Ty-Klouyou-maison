import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const InternalRules = () => {
  return (
    <div className="ruler-section">
      <Header />
      <div className="text-content">
        <h1>Règlement intérieur</h1>
        <div className="content">
          <p className="text">
            Bienvenue sur le règlement intérieur de notre site. Nous vous
            prions de bien vouloir lire attentivement les règles ci-dessous
            avant d'utiliser nos services.
          </p>
          <h3>Conditions générales d'utilisation :</h3>
          <p className="text">
            En utilisant ce site web, vous acceptez de vous conformer aux
            présentes conditions d'utilisation. Si vous n'acceptez pas ces
            conditions, veuillez ne pas utiliser ce site.
          </p>
          <ul className="text">
            <li>
              <strong>Utilisation du contenu :</strong> Vous êtes autorisé à
              consulter et à télécharger le contenu de ce site uniquement à des
              fins personnelles et non commerciales. Vous ne pouvez pas
              reproduire, distribuer, modifier, afficher publiquement ou
              exploiter de quelque manière que ce soit le contenu de ce site
              sans l'autorisation écrite préalable de Mino.
            </li>
            <li>
              <strong>Liens vers des sites tiers :</strong> Ce site peut
              contenir des liens vers des sites web tiers qui ne sont pas sous
              le contrôle de Mino. Nous n'assumons aucune responsabilité pour
              le contenu, les politiques de confidentialité ou les pratiques de
              ces sites tiers.
            </li>
            <li>
              <strong>Modifications du site :</strong> Mino se réserve le droit
              de modifier, suspendre ou interrompre ce site ou une partie de
              celui-ci à tout moment et sans préavis.
            </li>
            <li>
              <strong>Droit applicable :</strong> Les présentes conditions
              d'utilisation sont régies par le droit français. Tout litige
              relatif à l'utilisation de ce site sera soumis à la compétence
              exclusive des tribunaux français.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InternalRules;
