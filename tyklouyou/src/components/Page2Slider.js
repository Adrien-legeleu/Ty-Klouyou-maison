import React from "react";

const Page2Slider = ({ data, index, currentSlide }) => {
  return (
    <div className={`slide ${index === currentSlide ? "current" : ""}`}>
      <div className="title">
        <h2>{data.title}</h2>
      </div>
      <div className="img">
        <img src={"./assets/img/" + data.img} alt={data.title} />
      </div>
      <p>{data.para}</p>
      <a href="#" className="slider-button">
        <button>{data.btn}</button>
      </a>
    </div>
  );
};

export default Page2Slider;
