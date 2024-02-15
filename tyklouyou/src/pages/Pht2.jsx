import React, {  useState } from "react";
import dataPhtAll from "../data/dataPhtAll";
import PhtSlider from "../components/PhtSlider";

const Pht2 = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSliderShow, setIsSliderShow] = useState(false);

  const showSliderAll = (index) => {
    setSlideIndex(index);
    setIsSliderShow(true);
  };

  return (
    <div className="slider-photos-container">
      <div
        className="slider-photos"
        
      >
        <div className="slide" style={{animation:"scroll 20s linear infinite"}}>
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
      </div>
      <div className="text-infos">
        <h3>
          <img src="./assets/img/cliquez-sur.png" alt="click" />
          click</h3>
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
