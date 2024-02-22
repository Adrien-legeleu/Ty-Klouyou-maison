import React, { useEffect, useRef } from "react";
import dataPht from "../data/dataPht";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Pht2 from "./Pht2";
import Pht3 from "./Pht3";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Photos = () => {

  const title=useRef()


  useGSAP(
   ()=>{
   const images=gsap.utils.toArray(".image")
    images.forEach((image)=>{
      gsap.to(image , {
        y:-150,
        scrollTrigger:{
          trigger: image,
          start:"-30% top",
          scrub: 1,
        }
      })
      
    })
  }
    
  )
useGSAP(
   ()=>{
     const title = document.querySelector(".title-photos");
     gsap.to(".title-photos" , {
       x: "-100%",
       scrollTrigger:{
         trigger: title,
         start:"top top",
         scrub: 1,
       }
     });
   }
)



  return (
    <div className="Photos-container">
      <Header />
      <div className="photos-accueil" >
        <div className="title">
          <h1 ref={title} className="title-photos">Photos</h1>
        </div>
        <div className="images">
          {dataPht.map((pht) => (
            <div className="image" key={pht.id} >
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
      <Pht3 />
      <Footer />
    </div>
  );
};

export default Photos;
