import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Act2 = ({ data , isSun }) => {

  return (
    <div className="slide">
      <div className="text">
        <h2 style={{color:isSun? "black" : "white"}}>{data.title}</h2>
        <p style={{color:isSun? "black" : "white"}}>{data.text}</p>
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
