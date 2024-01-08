import React, {  useState, useRef } from "react";
import Header from "./Header";
import Reservation from "./Reservation";

const Page1 = () => {
  const spanRef = useRef();
  const [toggleDate , setToggleDate]=useState(false)

  // const phrases = [
  //   "En bord de mer !",
  //   "Une grande terrasse !",
  //   "Vue sur mer !",
  //   "Une énorme villa !",
  //   "Pleins d'activités !",
  //   "Une Incroyable maison !"
  // ];


  return (
    <div className="page1">
      <Header toggleDate={toggleDate} setToggleDate={setToggleDate}/>
      <div className="page1-container">
        <img src="./assets/img/logoSea.png" alt="" />
        <h1>Ty Klouyou</h1>
        <span ref={spanRef} className="span">ezeze</span>
        <p>
          Create by <i>W3bLuxury Design</i>
        </p>
      </div>
      <Reservation toggleDate={toggleDate} setToggleDate={setToggleDate}/>
    </div>
  );
};

export default Page1;
