import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Page3 = () => {
  useGSAP(() => {
    gsap.utils.toArray(".activity").forEach((activity) => {
      gsap.from(activity, {
        opacity: 0.6,
        y: 50,
        scrollTrigger: {
          trigger: activity,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  });

  useEffect(() => {
    gsap.utils.toArray(".image-activity").forEach((img) => {
      gsap.to(img, {
        y: -100,
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });

    gsap.utils.toArray(".link").forEach((link) => {
      gsap.to(link, {
        y: -150,
        scrollTrigger: {
          trigger: link,
          start: "-50% bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });
  }, []);

  const handleLinkClick = () => {
     gsap.to(window, {
      duration: 0,
      scrollTo: 0,
      ease: "power2.inOut",
    });
  };

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
            <div
              className="link magnetic-link"
            >
              <NavLink to="/activity" onClick={handleLinkClick}>
                <h4 className=" link-cursor">Découvrir les Iles Bretonnes</h4>
              </NavLink>
            </div>
          </div>
          <div className="activity">
            <div className="image-activity">
              <img
                src="./assets/img/vanne/10 Best Places In The North Of France To Visit.jpg"
                alt="Vannes"
              />
            </div>
            <div
              className="link magnetic-link"
            >
              <NavLink to="/activity" onClick={handleLinkClick} >
                <h4 className=" link-cursor">Découvrir Vannes</h4>
              </NavLink>
            </div>
          </div>
          <div className="activity">
            <div className="image-activity">
              <img
                src="./assets/img/ile/golfe.jpg"
                alt="golfe du morbihan"
              />
            </div>
            <div
              className="link magnetic-link"
            >
              <NavLink to="/activity" onClick={handleLinkClick}>
                <h4 className=" link-cursor">Découvrir le Golfe du Morbihan</h4>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="btn-activity">
          <NavLink to="/activity" onClick={handleLinkClick}>
            <button className=" link-cursor">Voir toutes les activités</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Page3;
