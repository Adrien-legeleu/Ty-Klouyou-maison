import React from "react";
import dataInfos from "../data/dataPhtInfos";
import { NavLink } from "react-router-dom";
import gsap from "gsap"

const Pht3 = () => {

   const handleLinkClick = () => {
    gsap.to(window, {
      duration: 0,
      scrollTo: 0,
      ease: "power2.inOut",
    });
  };
  return (
    <div className="infos-container" id="pht3">
      <h2>toutes les infos</h2>
      <div className="map-infos">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d966.7092811817619!2d-2.8464188!3d47.5122026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4810055e622f2d3b%3A0xb5ca20e4ece1eb9!2sVilla%20Ty%20klouyou!5e1!3m2!1sfr!2sfr!4v1710188817166!5m2!1sfr!2sfr" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="infos-content">
          <div className="infos">
          {dataInfos.map((info, index) => (
            <div className="info" key={index}>
              <h3>{info.title}</h3>
              <ul>
                <li>
                  <img src={info.icon1} alt="icon" />
                  <span>{info.list1}</span>
                </li>
                <li>
                  <img src={info.icon2} alt="icon" />
                  <span>{info.list2}</span>
                </li>
                <li>
                  <img src={info.icon3} alt="icon" />
                  <span>{info.list3}</span>
                </li>
                <li>
                  <img src={info.icon4} alt="icon" />
                  <span>{info.list4}</span>
                </li>
                <li>
                  <img src={info.icon5} alt="icon" />
                  <span>{info.list5}</span>
                </li>
                <li>
                  {info.icon6 && <img src={info.icon6} alt="icon" />}
                  {info.list6 && <span>{info.list6}</span>}
                </li>
                <li>
                  {info.icon7 && <img src={info.icon7} alt="icon" />}
                  {info.list7 && <span>{info.list7}</span>}
                </li>
              </ul>
            </div>
          ))}
          <NavLink to="/contact" onClick={handleLinkClick}>
            <div className="contact link-cursor">
            <p className=" link-cursor">Contactez-nous dès maintenant !</p>
          </div>
          </NavLink>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Pht3;
