import React, { useEffect, useRef, useState } from "react";
import Navgiation from "./Navigation";
import { motion } from "framer-motion";

const Header = ({toggleDate }) => {
    const [currentTime , setCurrentTime]=useState("13:06");
    const [navigationShow , setNavigationShow]=useState(false);
    const [ColorText , setColorText]=useState(false);
    const [titleResponsive , setTitleResponsive]=useState(false);
    const [isNotHoverHeader , setIsNotHoverHeader]=useState(false);
    const header=useRef()

  window.addEventListener("scroll", () => {
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  if (scrollPercentage > 60) {
    setColorText(true);
  } else {
    setColorText(false);
  }
});

useEffect(()=>{
  setTimeout(()=>{
    setIsNotHoverHeader(true)
  },10000)
},[isNotHoverHeader])

  useEffect(() => {
    setInterval(()=>{
        const today= new Date().toLocaleTimeString()
        const formatTime=today.split(":").splice(0 , 2).join(":")
        setCurrentTime(formatTime)
    },30000)
  },[]);

  useEffect(()=>{
    if (toggleDate) {
      if (window.innerWidth <700) {
        setTitleResponsive(true)
      }else{
        setTitleResponsive(false)
      }
    }else{
      setTitleResponsive(false)
    }
  },[toggleDate])

  return (
    <div className="header" ref={header} style={{color: ColorText ? "white" : (navigationShow || toggleDate ? "white" : "black")}} onMouseOver={()=>setIsNotHoverHeader(false)}>
      <div className="date">
        <img className="icon" src={`${ColorText ? "./assets/img/soleil.svg" : (navigationShow || toggleDate ? "./assets/img/soleil.svg" : "./assets/img/icons8-sun.svg") }`} alt="sun/moon tyklouyou"/>
        <span ><span>{currentTime}</span> | Saint-gildas de rhuys</span>
      </div>
      <div className="title" style={{display:titleResponsive ? "none" : "flex" , opacity:isNotHoverHeader ? "0" : "1"}}>
        <motion.span drag dragConstraints={header} dragSnapToOrigin="true" >Ty Klouyou</motion.span>
      </div>
      <div className="menu" style={{display:toggleDate ? "none" : "flex"}}>
        <button onClick={()=>setNavigationShow(!navigationShow)} style={{color: ColorText ? "white" : (navigationShow ? "white" : "black" ), border: ColorText ? "1px solid white" : (navigationShow ? "1px solid white" : "1px solid black")}}>
          Menu
          <div className="icon-menu">
            <div className="icon1" style={{transform: navigationShow ? "rotate(130deg)" : "rotate(0)" , top: navigationShow ? "50%" : "0" , backgroundColor:  ColorText ? "white" : (navigationShow ? "white" : "black")}}></div>
            <div className="icon2" style={{transform: navigationShow ? "rotate(-130deg)" : "rotate(0)" , top: navigationShow ? "50%" : "100%" , backgroundColor:  ColorText ? "white" : (navigationShow ? "white" : "black")}}></div>
          </div>
        </button>
      </div>
      <Navgiation navigationShow={navigationShow}/>
    </div>
  );
};

export default Header;
