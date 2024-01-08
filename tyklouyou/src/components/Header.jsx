import React, { useEffect, useState } from "react";
import Navgiation from "./Navigation";

const Header = ({toggleDate , setToggleDate}) => {
    const [currentTime , setCurrentTime]=useState("13:06");
    const [navigationShow , setNavigationShow]=useState(false);





  useEffect(() => {
    setInterval(()=>{
        const today= new Date().toLocaleTimeString()
        const formatTime=today.split(":").splice(0 , 2).join(":")
        setCurrentTime(formatTime)
    },30000)
  },[]);

  return (
    <div className="header">
      <div className="date">
        <img className="icon" src="./assets/img/soleil.svg" alt="" />
        <span><span>{currentTime}</span> | Saint-gildas de rhuys</span>
      </div>
      <div className="title">
        <span>Ty Klouyou</span>
      </div>
      <div className="menu" style={{display:toggleDate ? "none" : "flex"}}>
        <button onClick={()=>setNavigationShow(!navigationShow)}>
          Menu
          <div className="icon-menu">
            <div className="icon1" style={{transform: navigationShow ? "rotate(130deg)" : "rotate(0)" , top: navigationShow ? "50%" : "0"}}></div>
            <div className="icon2" style={{transform: navigationShow ? "rotate(-130deg)" : "rotate(0)" , top: navigationShow ? "50%" : "100%"}}></div>
          </div>
        </button>
      </div>
      <Navgiation navigationShow={navigationShow}/>
    </div>
  );
};

export default Header;
