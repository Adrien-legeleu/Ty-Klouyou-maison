import React from "react";

const Page1 = () => {

  const phrases = [
    "En bord de mer !",
    "Une grande terrasse !",
    "Vue sur mer !",
    "Une énorme villa !",
    "Pleins d'activités !",
    "Une Incroyable maison !"
  ];



  return (
    <div className="page1">
      <div className="page1-container">
        <img src="./assets/img/logoSea.png" alt="" />
        <h1>Ty Klouyou</h1>
        <a href="#footer">
           by <i>W3bLuxury Design</i><img src="./assets/img/angle-vers-le-haut.png" alt="arrow-down-webLuxury" />
        </a>
      </div>
    </div>
  );
};

export default Page1;
