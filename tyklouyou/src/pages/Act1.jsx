import React, {  useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dataAct from "../data/dataAct";
import Act2 from "./Act2";
import Footer from "../components/Footer";
import Header from "../components/Header";
gsap.registerPlugin(ScrollTrigger);

const Act1 = () => {
  const imgContent = useRef(null);
  const timeBar = useRef(null);
  const ballRender = useRef(null);

  const slides = useRef(null);
  const slide_container = useRef(null);

  useLayoutEffect(() => {
    if (slides.current && slide_container.current && timeBar.current) {
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
          .to(slide_container.current, { x: -amountToScroll });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: slides.current,
              start: "top top",
              scrub: 1,
            },
          })
          .to(timeBar.current, { width: "60%" });
      });

      return () => ctx.revert();
    }
  }, [slides, slide_container, timeBar]);

  return (
    <div className="act1">
      <div className="ball-header" ref={ballRender}></div>
      <Header />
      <div className="img-content" ref={imgContent}>
        <div className="img">
          {window.innerWidth - window.innerHeight < 250 ? (
            <img
              src="./assets/img/vanne/10 Best Places In The North Of France To Visit.jpg"
              alt=""
            />
          ) : (
            <img src="./assets/img/img-8k/fd-paysage (2).jpeg" alt="" />
          )}
        </div>
        <div className="title">
          <h1>
            <span>Acti</span>
            <span>Vité</span>
          </h1>
        </div>
      </div>
      <div className="actSlider-container" ref={slides}>
        <div className="time-bar" ref={timeBar}></div>
        <div
          className="actSlider"
          style={{
            background: "whitesmoke",
            boxShadow: "0 0 10px whitesmoke",
          }}
          ref={slide_container}
        >
          {dataAct.map((data, id) => (
            <div className="act2-slide">
              <Act2 data={data} key={id} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Act1;
