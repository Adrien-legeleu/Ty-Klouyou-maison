import React, { useEffect, useRef, useState } from "react";
import dataPhtAll from "../data/dataPhtAll";
import { motion } from "framer-motion";
import PhtSlider from "../components/PhtSlider";

const Pht2 = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSliderShow, setIsSliderShow] = useState(false);
  const slider = useRef(null);
  const slider_container = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    
  }, []);

  const showSliderAll = (index) => {
    setSlideIndex(index);
    setIsSliderShow(true);
  };

  return (
    <div className="slider-photos-container" ref={slider_container}>
      <motion.div
        ref={slider}
        drag
        dragConstraints={{ right: 0, left: -width, top: 0, bottom: 0 }}
        className="slider-photos"
        
      >
        <div className="slide">
          {dataPhtAll.map((pht, index) => (
            <div
              className="photo"
              key={index}
              onClick={() => showSliderAll(index)}
            >
              <img src={pht.src} alt="name" />
            </div>
          ))}
          {dataPhtAll.map((pht, index) => (
            <div
              className="photo"
              key={index}
              onClick={() => showSliderAll(index)}
            >
              <img src={pht.src} alt="name" />
            </div>
          ))}
        </div>
      </motion.div>
      <div className="text-infos">
        <h3>
          <img src="./assets/img/cliquez-sur.png" alt="click" />
          slide & click</h3>
      </div>
      <PhtSlider
        setSlideIndex={setSlideIndex}
        slideIndex={slideIndex}
        setIsSliderShow={setIsSliderShow}
        isSliderShow={isSliderShow}
      />
    </div>
  );
};

export default Pht2;
