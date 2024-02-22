import React, { useRef } from "react";
import {gsap} from "gsap"
import {useGSAP} from "@gsap/react"

const Page2 = () => {

  
  useGSAP(()=>{
    const images = gsap.utils.toArray(".img")
    images.forEach(img => {
      gsap.to(
      img , {
      y:-150,
      scrollTrigger:{
          trigger: img,
          start:"top bottom",
          scrub: 2,
        }
      }
    )
    });
  })

  return (
    <div className="page2-container" id="page2">
      <div className="page2">
      <div className="title">
        <h2>Vivez votre expérience Ty Klouyou</h2>
      </div>
      <div className="img-container" >
        <div className="img">
          <img
            src="./assets/img/extérieur/beautiful-modern-house-cement-view-from-garden.jpg"
            alt="image-vilkla-tyklouyou"
          />
        </div>
        <div className="img">
          <img
            src="./assets/img/salon/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.jpg"
            alt="image-salon-tyklouyou"
          />
        </div>
        <div className="img">
          <img
            src="./assets/img/ile/Belle Île en Mer ( Morbihan Bretagne ).jpg"
            alt="image-plage-ile-morbihan"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page2;
