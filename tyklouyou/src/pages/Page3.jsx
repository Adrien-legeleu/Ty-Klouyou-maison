import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Page3 = () => {
  return (
    <div className="page3-container">
      <h2>Des activités à couper le souffle !</h2>
      <div className="activities-container">
        <div className="activity">
          <div className="image">
            <img
              src="./assets/img/ile/10 choses à savoir sur le Golfe du Morbihan.jpg"
              alt="ile proche de villa ty klouyou"
            />
          </div>
          <motion.NavLink
            to="/"
            className="link"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <h4>Découvrir les Iles Bretonnes</h4>
          </motion.NavLink>
        </div>
        <div className="activity">
          <div className="image">
            <img
              src="./assets/img/vanne/10 Best Places In The North Of France To Visit.jpg"
              alt="Vannes"
            />
          </div>
          <motion.NavLink
            to="/"
            className="link"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <h4>Découvrir Vannes</h4>
          </motion.NavLink>
        </div>
        <div className="activity">
          <div className="image">
            <img
              src="./assets/img/ile/5 Plages De Rêve Sur Les îles Bretonnes.jpg"
              alt="golfe du morbihan"
            />
          </div>
          <motion.NavLink
            to="/"
            className="link"
            drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <h4>Découvrir le Golfe du Morbihan</h4>
          </motion.NavLink>
        </div>
      </div>
      <button>Voir toutes les activités</button>
    </div>
  );
};

export default Page3;
