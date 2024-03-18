import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Header from "../components/Header";
import Reservation from "../components/Reservation";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Footer from "../components/Footer";

const Home = () => {

    const [toggleDate , setToggleDate]=useState(false)

  return (
    <div className="accueil">
       <Header  toggleDate={toggleDate}/>
      <Reservation toggleDate={toggleDate} setToggleDate={setToggleDate}/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Footer/> 
    </div>
  );
};

export default Home;
