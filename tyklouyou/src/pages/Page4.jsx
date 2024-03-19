import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import SliderCard from "../components/SliderCard";

const Page4 = () => {
  const [isSliderResponsive, setIsSliderResponsive] = useState(false);

useEffect(() => {
  if (window.innerWidth < 800) {
    setIsSliderResponsive(true);
  } else {
    setIsSliderResponsive(false);
  }
}, []);

 const handleLinkClick = () => {
    gsap.to(window, {
      duration: 0,
      scrollTo: 0,
      ease: "power2.inOut",
    });
  };


  return (
    <div className="page4">
      <BeforePage />
      <h2>Votre Villa</h2>
      <div className="infos">
        <div className="slider">
          <div className="slider-content">
          <SliderPhotos />
          </div>
          <NavLink to="/photos"  onClick={handleLinkClick}>

          <button className=" link-cursor">Voir toutes les photos</button>
          </NavLink>
        </div>
        {isSliderResponsive ? (
          <SliderCard/>
        ) : (
          <div className="card-infos">
            <div className="cards-container">
              <div className="card" style={{ "--i": "#A6938D" }}>
                <img
                  src="./assets/img/angle-up-solid (1).svg"
                  alt="icon-angle-up"
                  className="icon-angle"
                />
                <h3>Chambres</h3>
                <ul>
                  <li>
                    <img
                      src="./assets/img/iconinfos/chambre.png"
                      alt="icon-villa-tyKlouyou"
                    />{" "}
                    5 chambres
                  </li>
                  <li>
                    <img
                      src="./assets/img/iconinfos/007-lit-simple.png"
                      alt="icon-villa-tyKlouyou"
                    />{" "}
                    4 lits simples
                  </li>
                  <li>
                    <img
                      src="./assets/img/iconinfos/002-lit.png"
                      alt="icon-villa-tyKlouyou"
                    />{" "}
                    2 lits doubles
                  </li>
                  <li>
                    <NavLink to="/photos" onClick={handleLinkClick}>
                      <span className=" link-cursor">voir plus</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="card" style={{ "--i": "#E8A951" }}>
                <img
                  src="./assets/img/angle-up-solid (1).svg"
                  alt="icon-angle-up"
                  className="icon-angle"
                />
                <h3> Salon</h3>
                <ul>
                  <li>
                    <img
                      src="./assets/img/iconinfos/003-canape-lit.png"
                      alt="icon-villa-tyKlouyou"
                    />
                    canapé/lit
                  </li>
                  <li>
                    <img
                      src="./assets/img/iconinfos/004-table.png"
                      alt="icon-villa-tyKlouyou"
                    />{" "}
                    table à manger
                  </li>
                  <li>
                    <img
                      src="./assets/img/iconinfos/018-le-coucher-du-soleil.png"
                      alt="icon-villa-tyKlouyou"
                    />{" "}
                    vue sur la mer
                  </li>
                  <li>
                    <NavLink  to="/photos" onClick={handleLinkClick}>
                      <span className=" link-cursor">voir plus</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="card" style={{ "--i": "#6B2D2D" }}>
                <img
                  src="./assets/img/angle-up-solid (1).svg"
                  alt="icon-angle-up"
                  className="icon-angle"
                />
                <h3>Extérieur</h3>
                <ul>
                  <li>
                    <img
                      src="./assets/img/iconinfos/017-balcon.png"
                      alt="icon-villa-tyKlouyou"
                    />{" "}
                    terrasse orienté mer
                  </li>
                  <li>
                    <img
                      src="./assets/img/iconinfos/buisson.png"
                      alt="icon-villa-tyKlouyou"
                    />{" "}
                    clôture intégrale
                  </li>
                  <li>
                    <img
                      src="./assets/img/iconinfos/022-jardin.png"
                      alt="icon-villa-tyKlouyou"
                    />{" "}
                    grand jardin
                  </li>
                  <li>
                    <NavLink  to="/photos#pht3" onClick={handleLinkClick}>
                      <span className=" link-cursor">voir plus</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SliderPhotos = () => {
  return (
    <Swiper
      className="slide mySwiper"
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {DataSlider.map((item) => (
        <SwiperSlide className="image">
          <img src={item.src} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
const BeforePage = () => {
  const handleClick = () => {
    window.open(
      "https://www.google.fr/maps/place/Villa+Ty+klouyou/@47.5122026,-2.8464188,18.75z/data=!4m15!1m8!3m7!1s0x481005b8b64deb93:0x40ca5cd36e2bcc0!2sSaint-Gildas-de-Rhuys!3b1!8m2!3d47.5002434!4d-2.8361113!16s%2Fm%2F03cbzyk!3m5!1s0x4810055e622f2d3b:0xb5ca20e4ece1eb9!8m2!3d47.51171!4d-2.8455589!16s%2Fg%2F11l1q7nr0m?entry=ttu",
      "_blank"
    );
  };
  return (
    <div className="before-page link-cursor" onClick={handleClick}>
      <h3 className=" link-cursor">56730 Saint-Gildas-de-Rhuys</h3>
      <p className=" link-cursor">adresse exacte donnée après réservation</p>
      <img className=" link-cursor" src="./assets/img/cliquez-sur.png" alt="icon-click-maps-tyKlouyou" />
    </div>
  );
};

const DataSlider = [
  {
    id: "1",
    src: "./assets/img/chambre/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet.jpg",
  },
  {
    id: "2",
    src: "./assets/img/cuisine/beautiful-shot-modern-house-kitchen.jpg",
  },
  {
    id: "3",
    src: "./assets/img/extérieur/beautiful-shot-chaplin-s-world-museum-switzerland-surrounded-by-lush-nature.jpg",
  },
  {
    id: "4",
    src: "./assets/img/salle de bain/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg",
  },
  {
    id: "5",
    src: "./assets/img/salon/interior-with-bid-dining-room-modern-private-house.jpg",
  },
];

export default Page4;
