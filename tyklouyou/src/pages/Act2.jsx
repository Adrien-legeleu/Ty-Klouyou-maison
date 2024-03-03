import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Act2 = ({ data }) => {
  const [isGsap, setIsGsap] = useState(true);
  const slide = useRef();

  useEffect(() => {
    const slideWidth = slide.current.offsetWidth;
    if (slideWidth > 900) {
      setIsGsap(true)
    } else {
      setIsGsap(false)
      console.log("en dessous");
    }
  }, []);

  useGSAP(() => {
      if (isGsap) {
        gsap.to(".video-container", {
        x: -1000,
        scrollTrigger: {
          trigger: ".video-container",
          start: "left right",
          scrub: 1,
        },
      });
      }
      else{
        gsap.to(".video-container", {
        x: 0,
        scrollTrigger: {
          trigger: ".video-container",
          start: "left right",
          scrub: 1,
        },
      });
      }
  });


  return (
    <div className="slide" ref={slide}>
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
