import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dataAct from "../data/dataAct"
import Act2 from "./Act2";
gsap.registerPlugin(ScrollTrigger);

const Act1 = () => {
  const imgContent = useRef(null);
  const img = useRef(null);
  const text = useRef(null);
  const span1 = useRef(null);
  const span2 = useRef(null);

  useLayoutEffect(() => {
    let ctx=gsap.context(()=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:imgContent.current,
                pin:imgContent.current,
                scrub:1,
                start:"top top",
            }
        })
        .to(img.current,{transform:"rotate(0) scale(4)"})
        .to(span1.current, {x:-800 , transform:"scale(4)" , opacity:0},0.01,"<")
        .to(span2.current, {x:800 , transform:"scale(4)" , opacity:0},0.01,"<")

        gsap.timeline({
            scrollTrigger:{
                trigger:text.current,
                pin:text.current,
                scrub:1,
                start:"top top",
            }
        })

    })
    return()=>ctx.revert()
  }, []);

  return (
    <div className="act1">
      <div className="img-content" ref={imgContent}>
        <div className="img" ref={img}>
          <img
            src="./assets/img/vanne/De Vannes à Locmariaquer et Port-Crouesty, week-end de charme dans le Morbihan.jpg"
            alt=""
          />
        </div>
        <div className="title">
            <h1>
                <span ref={span1}>
                    Acti
                </span>
                <span ref={span2}>
                    Vité
                </span>
            </h1>
        </div>
      </div>
      <div className="actSlider">
        {dataAct.map((data , id)=>(
                <Act2 data={data} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Act1;
