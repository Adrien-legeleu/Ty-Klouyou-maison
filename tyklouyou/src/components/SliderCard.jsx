import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { HashLink as Link } from "react-router-hash-link";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

export default function App({handleClick}) {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="slider-container mySwiper"
      >
        <SwiperSlide className='slide' style={{ "--i": "#DE554E" }}>
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
                    <Link to="/photos#pht3" className="link" >
                      <span>voir plus</span>
                    </Link>
                  </li>
                </ul>
        </SwiperSlide>
        <SwiperSlide className='slide' style={{ "--i": "#E8A951" }}>
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
                    <Link to="/photos#pht3" className="link" >
                      <span>voir plus</span>
                    </Link>
                  </li>
                </ul>
            
        </SwiperSlide>
        <SwiperSlide className='slide' style={{ "--i": "#6B2D2D" }}>
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
                    <Link to="/photos#pht3" className="link">
                      <span>voir plus</span>
                    </Link>
                  </li>
                </ul>
              
        </SwiperSlide>
        <SwiperSlide className='slide' style={{ "--i": "#A6938D" }}>
            <NavLink to="/photos" className="link-alone" onClick={handleClick}>
                <h4>Voir toutes les infos</h4>
            </NavLink>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
