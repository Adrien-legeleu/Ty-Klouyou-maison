import React, { useEffect, useRef } from "react";
import dataPht from "../data/dataPht";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Pht2 from "./Pht2";
import Pht3 from "./Pht3";
import Footer from "../components/Footer";
import Header from "../components/Header";
gsap.registerPlugin(ScrollTrigger);

const Photos = () => {
  const accueil = useRef(null);
  const images = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: accueil.current,
          pin: accueil.current,
          scrub: 1,
        },
      })
        .to(".title", { x: "-100%", opacity: 0, scale: 0.5 }, 0)
        .to(images.current, { y: () => Math.random() * -50-50 +"%", rotate:() => Math.random() * -5 }, 0);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="Photos-container">
      <Header />
      <div className="photos-accueil" ref={accueil}>
        <div className="title">
          <h1>Photos</h1>
        </div>
        <div className="images">
          {dataPht.map((pht) => (
            <div className="image" key={pht.id} ref={(el) => images.current.push(el)}>
              <img src={pht.src} alt="photos ty klouyou" />
            </div>
          ))}
        </div>
        <div className="images-behind">
            <div className="image-behind">
              <img src="./assets/img/extérieur/beautiful-shot-chaplin-s-world-museum-switzerland-surrounded-by-lush-nature.jpg" alt="icon-img-tyKlouyou-behind" />
            </div>
            <div className="image-behind">
              <img src="./assets/img/extérieur/outdoor-deck.jpg" alt="icon-img-tyKlouyou-behind" />
            </div>
        </div>
      </div>
      <Pht2 />
      <Pht3 id="pht3"/>
      <Footer />
    </div>
  );
};

export default Photos;
