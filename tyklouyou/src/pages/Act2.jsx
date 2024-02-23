import { useGSAP } from "@gsap/react";
import {gsap} from "gsap";
import React from "react";


const Act2 = ({ data }) => {


  useGSAP(() => {
  gsap.to(".video-container", {
    x:-500,
    scrollTrigger: {
      trigger: ".video-container", 
      start: "left right",
      scrub:1,
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
