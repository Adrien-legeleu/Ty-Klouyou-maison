import React from "react";

const Page2Slider = ({ data, index }) => {
  return (
    <div className={"page2-slider slider" + index}>
      <h2>{data.title}</h2>
      <img src={"./assets/img/" + data.img} alt={data.title} />
      <p>{data.para}</p>
      <a href="#">
        <button>{data.btn}</button>
      </a>
    </div>
  );
};

export default Page2Slider;
