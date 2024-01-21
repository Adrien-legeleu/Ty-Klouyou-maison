import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dataAct from "../data/dataAct";
import Act2 from "./Act2";
import Footer from "../components/Footer";
import Navgiation from "../components/Navigation";
import Header from "../components/Header";
gsap.registerPlugin(ScrollTrigger);

const Act1 = () => {
  const [isSun, setIsSun] = useState(true);
  const imgContent = useRef(null);
  const img = useRef(null);
  const span1 = useRef(null);
  const span2 = useRef(null);
  const timeBar = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgContent.current,
            pin: imgContent.current,
            scrub: 3,
            start: "top top",
          },
        })
        .to(img.current, {
          transform: "rotate(0) scale(1.5)",
          width: "75%",
          height: "70%",
        })
        .to(
          span1.current,
          { x: -800, transform: "scale(4)", opacity: 0 },
          0.01,
          "<"
        )
        .to(
          span2.current,
          { x: 800, transform: "scale(4)", opacity: 0 },
          0.01,
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  const slides = useRef(null);
  const slide_container = useRef(null);

  useLayoutEffect(() => {
    if (slides.current) {
      const slidesWidth = slide_container.current.offsetWidth;
      const amountToScroll = slidesWidth - window.innerWidth;

      let ctx = gsap.context(() => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: slides.current,
              pin: slides.current,
              scrub: 1,
            },
          })
          .to(slide_container.current, { x: -amountToScroll })
          .to(timeBar.current, { width: "60%" });
      });

      return () => ctx.revert();
    }
  }, [slides]);

  return (
    <div className="act1">
      <div className="ball-header"></div>
      <Header />
      <div className="img-content" ref={imgContent}>
        <div className="img" ref={img}>
          {window.innerWidth - window.innerHeight < 250 ? (
            <img
              src="./assets/img/vanne/10 Best Places In The North Of France To Visit.jpg"
              alt=""
            />
          ) : (
            <img
              src="./assets/img/vanne/De Vannes à Locmariaquer et Port-Crouesty, week-end de charme dans le Morbihan.jpg"
              alt=""
            />
          )}
        </div>
        <div className="title">
          <h1>
            <span ref={span1}>Acti</span>
            <span ref={span2}>Vité</span>
          </h1>
        </div>
      </div>
      <div className="actSlider-container" ref={slides}>
        <div className="control-night" onClick={() => setIsSun(!isSun)}>
            <img
              src={
                isSun
                  ? "./assets/img/icons8-sun.svg"
                  : "./assets/img/icons8-symbole-de-la-lune-60.png"
              }
              alt="sun-moon-tyKlouyou"
            />
          </div>
          <div className="time-bar" ref={timeBar}></div>
        <div
          className="actSlider"
          style={{
            background: isSun ? "whitesmoke" : "#141342",
            boxShadow: isSun
              ? "0 5px 10px 8px whitesmoke"
              : "0 5px 10px 8px #141342",
          }}
          ref={slide_container}
        >
          {dataAct.map((data, id) => (
            <Act2 data={data} key={id} isSun={isSun} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Act1;
