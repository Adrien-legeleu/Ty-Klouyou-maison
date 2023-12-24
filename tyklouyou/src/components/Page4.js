import React from "react";

const Page4 = () => {
  return (
    <div className="page4">
      <div className="notice-reservation-container">
        <div className="notice-container">
          <h2>La Villa Ty Klouyou est noté 4.9 sur AirBnb</h2>
          <div className="notices">
            <div className="notice">
              <img src="" alt="Avatar01" />
              <h4>Robert Levant</h4>
              <p>etoile</p>
              <div className="notice-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  est placeat doloribus ipsa necessitatibus exercitationem amet
                  natus! Quam officiis, temporibus autem dolorem ipsum iure
                  minima!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="reservation-container">
          <h2>Réservez dès maintenant !</h2>
          <form className="reservation">
            <input type="date" />
            <input type="date" />
            <div className="nb-adult">
              <label htmlFor="adult">Nombre d'adultes</label>
              <input type="range" name="adult" min="1" max="10" />
            </div>
            <div className="nb-children">
              <label htmlFor="child">Nombre d'enfants</label>
              <input type="range" name="child" min="1" max="10" />
            </div>
            <div className="prix">
              <p>
                Le prix pour votre séjour du <span>08/05/2023</span> au{" "}
                <span>15/05/2023</span> s'élèvera à <span>450 euros</span>
              </p>
            </div>
            <div className="btn-submit">
              <input type="submit" value="Réservez" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page4;
