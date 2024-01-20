import React, { useState } from "react";

const Act2 = ({ data }) => {
    const [isAutoPlay , setIsAutoPlay]=useState(false)


  return (
    <div className="slide">
      <div className="text">
        <h2>{data.title}</h2>
        <p> {data.text} </p>
      </div>
      <div className="video-container">
        <div className="video" onMouseEnter={()=>setIsAutoPlay(true)} onMouseLeave={()=>setIsAutoPlay(false)}>
            <iframe className="iframe" src={`${data.src} ${isAutoPlay ? "?rel=0&showinfo=0&controls=1&autoplay=1" : "?rel=0&showinfo=0&controls=1"}`} title="YouTube video player" allowFullScreen  autoPlay></iframe>
        </div>
      </div>
    </div>
  );
};

export default Act2;
