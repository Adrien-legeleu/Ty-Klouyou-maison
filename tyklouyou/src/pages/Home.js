import React from "react";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";

const Home = () => {
  return (
    <div className="accueil">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
};

export default Home;
