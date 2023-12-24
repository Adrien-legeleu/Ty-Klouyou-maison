import React from "react";

const Page3 = () => {
  return (
    <div className="page3">
      <h2>Informations et Activités</h2>
      <div className="informations-activities-container">
        <div className="informations-container">
          <div className="informations">
            <div className="information">
              <h3>extérieur</h3>
              <ul>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>
                  <a href="#">voir plus</a>
                </li>
              </ul>
            </div>
            <div className="information">
              <h3>salon</h3>
              <ul>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>
                  <a href="#">voir plus</a>
                </li>
              </ul>
            </div>
            <div className="information">
              <h3>chambre</h3>
              <ul>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>Grande terrasse</li>
                <li>
                  <a href="#">voir plus</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn-infos">
            <button>Voir Informations</button>
            <button>Voir Activités</button>
          </div>
        </div>
        <div className="activity-container">
          <div className="activity">
            <img
              src="./assets/img/vanne/10 Best Places In The North Of France To Visit.jpg"
              alt="zazaza"
            />
            <h3>Vannes et son centre historique</h3>
          </div>
          <div className="activity">
            <img
              src="./assets/img/ile/L'île d'Houat, archipel du Ponant.jpg"
              alt="zazaza"
            />
            <h3>Les iles bretonnes</h3>
          </div>
          <div className="activity">
            <img
              src="./assets/img/ile/10 choses à savoir sur le Golfe du Morbihan.jpg"
              alt="zazaza"
            />
            <h3>Le golfe du Morbihan</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
