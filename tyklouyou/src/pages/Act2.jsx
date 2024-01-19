import React from "react";

const Act2 = ({ data }) => {
  return (
    <div className="slide">
      <div className="text">
        <h2>{data.title}</h2>
        <p> {data.text} </p>
      </div>
      <div className="video-container">
        <iframe className="video" src={data.src} title="YouTube video player" ></iframe>
      </div>
    </div>
  );
};

export default Act2;
