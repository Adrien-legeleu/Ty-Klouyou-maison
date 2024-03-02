import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const Page3 = () => {

    useGSAP(()=>{
    const images = gsap.utils.toArray(".image-activity")
    const links = gsap.utils.toArray(".link")
    images.forEach(img => {
      gsap.to(
      img , {
      y:-100,
      scrollTrigger:{
          trigger: img,
          start:"top bottom",
          scrub: 2
        }
      }
    )
    })
    links.forEach(link => {
      gsap.to(
      link , {
      y:-150,
      scrollTrigger:{
          trigger: link,
          start:"-50% bottom",
          scrub: 2,
        }
      }
    )
    });
  })

  return (
    <div className="page3">
      <div className="page3-container">
      <h2>Des activités à couper le souffle !</h2>
      <div className="activities-container">
        <div className="activity">
          <div className="image-activity">
            <img
              src="./assets/img/ile/houat.jpg"
              alt="ile proche de villa ty klouyou"
            />
          </div>
          <motion.div
            className="link"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <NavLink to="/activity" onClick={()=>window.scrollY(0)}>
              <h4>Découvrir les Iles Bretonnes</h4>
            </NavLink>
          </motion.div>
        </div>
        <div className="activity">
          <div className="image-activity">
            <img
              src="./assets/img/vanne/10 Best Places In The North Of France To Visit.jpg"
              alt="Vannes"
            />
          </div>
          <motion.div
            className="link"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <NavLink to="/activity" onClick={()=>window.scrollY(0)}>
              <h4>Découvrir Vannes</h4>
            </NavLink>
          </motion.div>
        </div>
        <div className="activity">
          <div className="image-activity">
            <img
              src="./assets/img/ile/golfe.jpg"
              alt="golfe du morbihan"
            />
          </div>
          <motion.div
            className="link"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <NavLink to="/activity" onClick={()=>window.scrollY(0)}>
              <h4>Découvrir le Golfe du Morbihan</h4>
            </NavLink>
          </motion.div>
        </div>
      </div>
      <div className="btn-activity">
        <NavLink to="/activity" onClick={()=>window.scrollY(0)}>
      <button>Voir toutes les activités</button>
      </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Page3;
