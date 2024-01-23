import React, { useEffect, useRef } from "react";
import dataPht from "../data/dataPht";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Pht2 from "./Pht2";
gsap.registerPlugin(ScrollTrigger)

const Photos = () => {
    const accueil=useRef(null)
    const image=useRef(null)
    const title=useRef(null)


useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: accueil.current,
                pin: accueil.current,
                scrub: 1,
            },
        })
        .to(title.current, { x: "-100%", opacity: 0, scale: 0.5 }, 0)
        .to(image.current , {transform: "rotate(-3deg)" , y:"-50%"}, 0)
    });

    return () => ctx.revert();
}, []);





  return (
    <div className="Photos-container">
      <div className="photos-accueil" ref={accueil}>
        <div className="title" ref={title}>
          <h1>Photos</h1>
        </div>
        <div className="images" ref={image}>
          {dataPht.map((pht) => (
            <div className="image" key={pht.id} >
              <img src={pht.src} alt="photos ty klouyou" />
            </div>
          ))}
        </div>
      </div>
      <Pht2/>
    </div>
  );
};

export default Photos;
