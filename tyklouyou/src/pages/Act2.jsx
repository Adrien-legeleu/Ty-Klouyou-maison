import { useGSAP } from "@gsap/react";
import {gsap} from "gsap";
import React from "react";


const Act2 = ({ data }) => {


  useGSAP(() => {
  gsap.to(".video", {
    transform:'translate(0)',
    scrollTrigger: {
      trigger: ".video", // Le déclencheur est la vidéo
      start: "right right", // Commencer l'animation lorsque la droite de la vidéo atteint la droite de la fenêtre
      end: "+=100%", // Facultatif : vous pouvez spécifier quand terminer l'animation
      scrub: 2,
      markers: true // Pour le débogage, retirez-le si vous ne l'utilisez pas
    }
  });
});


  return (
    <div className="slide">
      <div className="text">
        <h2 style={{color: "black"}}>{data.title}</h2>
        <p style={{color: "black"}}>{data.text}</p>
      </div>
      <div className="video-container">
        <div className="video">
          <iframe
            className="iframe"
            src={`${data.src}?rel=0&showinfo=0`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Act2;
