import React, { useEffect, useState } from "react";

const Page4 = () => {
  let inputArrival = document.querySelector(".arrival");
  let inputDeparture = document.querySelector(".departure");
  let priceNight = document.querySelector(".pricePerNight");

  // price date ---
  const priceAndNight = () => {
    let price = 220;
    let night =
      Math.round(
        new Date(inputDeparture.value) - new Date(inputArrival.value)
      ) /
      1000 /
      24 /
      3600;
    let pricePerNight = night * price;
    priceNight.textContent = `${pricePerNight} euros`;
  };

  // Date programmation ------------------
  //   let today = new Date().toISOString().split("T")[0];
  //   inputArrival.value = today;
  //   inputArrival.min = today;

  //   let tomorrow = new Date();
  //   tomorrow.setDate(tomorrow.getDate() + 2);
  //   let tomorrowFormat = tomorrow.toISOString().split("T")[0];
  //   inputDeparture.value = tomorrowFormat;
  //   inputDeparture.min = tomorrowFormat;

  const dateArrival = (e) => {
    inputArrival.textContent = e.target.value;
    if (e.target.value > inputDeparture.value) {
      let newArrival = new Date(e.target.value);
      newArrival.setDate(newArrival.getDate() + 2);
      inputDeparture.value = newArrival.toISOString().split("T")[0];
    }
    priceAndNight();
  };
  const dateDeparture = (e) => {
    inputDeparture.textContent = e.target.value;
    if (e.target.value < inputArrival.value) {
      let newDeparture = new Date(e.target.value);
      newDeparture.setDate(newDeparture.getDate() - 2);
      inputArrival.value = newDeparture.toISOString().split("T")[0];
    }
    priceAndNight();
  };

  // input programmation

  let alertInput = document.querySelector(".alert-input");
  const [nbAdult, setNbAdult] = useState(0);
  const [nbChild, setNbChild] = useState(0);

  useEffect(() => {
    let nbPersonn = parseInt(nbAdult) + parseInt(nbChild);
    // nbPersonn > 10
    //   ? (alertInput.style.display = "block")
    //   : (alertInput.style.display = "none");
  }, [nbAdult, nbChild]);

  return (
    <div className="page4">
      <div className="notice-reservation-container">
        <div className="notice-container container">
          <h2>Noté 4.9 sur AirBnb</h2>
          <div className="notices">
            <i class="fa-solid fa-angle-left left"></i>
            <i class="fa-solid fa-angle-right right"></i>
            <div className="notice">
              <img
                src="./assets/img/empty-hallway-background.jpg"
                alt="Avatar01"
              />
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
              <button>Voir Avis</button>
            </div>
          </div>
        </div>
        <div className="reservation-container container">
          <h2>Réservez dès maintenant !</h2>
          <form className="reservation">
            <input
              type="date"
              className="arrival date"
              onChange={(e) => dateArrival(e)}
            />
            <input
              type="date"
              className="departure date"
              onChange={(e) => dateDeparture(e)}
            />
            <div className="nb-adult">
              <label htmlFor="adult" id="textAdult">
                Nombre d'adultes:
              </label>
              <input
                type="number"
                name="nb-adult"
                min="1"
                max="10"
                defaultValue="2"
                onChange={(e) => setNbAdult(e.target.value)}
              />
            </div>
            <div className="nb-children">
              <label htmlFor="child" id="textChildren">
                Nombre d'enfants:
              </label>
              <input
                type="number"
                name="child"
                min="0"
                max="8"
                defaultValue="3"
                onChange={(e) => setNbChild(e.target.value)}
              />
            </div>
            <div className="prix">
              <p>
                Le prix pour votre séjour s'élèvera à{" "}
                <span className="pricePerNight">440 euros</span>.
              </p>
            </div>
            <p className="alert-input">
              Le nombre de personnes maximums autorisées est 10
            </p>
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
