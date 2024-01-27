import React, { useEffect, useRef, useState } from "react";
import Navgiation from "./Navigation";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = ({ toggleDate }) => {
  const [currentTime, setCurrentTime] = useState("13:06");
  const [navigationShow, setNavigationShow] = useState(false);
  const [titleResponsive, setTitleResponsive] = useState(false);
  const [isNotHoverHeader, setIsNotHoverHeader] = useState(false);
  const header = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsNotHoverHeader(true);
    }, 10000);
  }, [isNotHoverHeader]);

  useEffect(() => {
    setInterval(() => {
      const today = new Date().toLocaleTimeString();
      const formatTime = today.split(":").splice(0, 2).join(":");
      setCurrentTime(formatTime);
    }, 30000);
  }, []);

  useEffect(() => {
    if (toggleDate) {
      if (window.innerWidth < 700) {
        setTitleResponsive(true);
      } else {
        setTitleResponsive(false);
      }
    } else {
      setTitleResponsive(false);
    }
  }, [toggleDate]);
  useEffect(() => {
    if (navigationShow) {
      window.scrollTo(0, 0);
    }
  }, [navigationShow]);

  return (
    <div className="header-container">
      <div
        className="header"
        ref={header}
        style={{ color: navigationShow || toggleDate ? "white" : "rgb(119, 119, 119)" }}
        onMouseOver={() => setIsNotHoverHeader(false)}
      >
        <div className="date">
          <img
            className="icon"
            src={`${
              navigationShow || toggleDate
                ? "./assets/img/soleil.svg"
                : "../assets/img/icons8-soleil-100.png"
            }`}
            alt="sun/moon tyklouyou"
          />
          <span>
            <span>{currentTime}</span> | Saint-gildas de rhuys
          </span>
        </div>
        <NavLink to="/" onClick={() => window.scrollY(0)}>
          <div
            className="title"
            style={{
              display: titleResponsive ? "none" : "flex",
              opacity: isNotHoverHeader ? "0" : "1",
              color: navigationShow ? "white" : "rgb(119, 119, 119)",
            }}
          >
            <motion.span drag dragConstraints={header} dragSnapToOrigin="true">
              Ty Klouyou
            </motion.span>
          </div>
        </NavLink>
        <div className="menu" style={{ display: toggleDate ? "none" : "flex" }}>
          <button
            onClick={() => setNavigationShow(!navigationShow)}
            style={{
              color: navigationShow ? "white" : "gray",
              border: navigationShow ? "1px solid white" : "1px solid rgb(119, 119, 119)",
            }}
          >
            Menu
            <div className="icon-menu">
              <div
                className="icon1"
                style={{
                  transform: navigationShow ? "rotate(130deg)" : "rotate(0)",
                  top: navigationShow ? "50%" : "0",
                  backgroundColor: navigationShow ? "white" : "rgb(119, 119, 119)",
                }}
              ></div>
              <div
                className="icon2"
                style={{
                  transform: navigationShow ? "rotate(-130deg)" : "rotate(0)",
                  top: navigationShow ? "50%" : "100%",
                  backgroundColor: navigationShow ? "white" : "rgb(119, 119, 119)",
                }}
              ></div>
            </div>
          </button>
        </div>
      </div>
        <Navgiation navigationShow={navigationShow} />
    </div>
  );
};

export default Header;
