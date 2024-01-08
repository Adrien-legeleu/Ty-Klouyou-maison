import React, { useEffect, useState } from "react";
import Navgiation from "./Navigation";

const Header = ({toggleDate , setToggleDate}) => {
    const [currentTime , setCurrentTime]=useState("13:06");
    const [navigationShow , setNavigationShow]=useState(false);
    const Navigation=document.querySelector(".navigation-container")
    const NavigationSun=document.querySelector(".navigation")
    const IconMenu1=document.querySelector(".icon1")
    const IconMenu2=document.querySelector(".icon2")


    const ShowNavigation=()=>{
        if (Navigation) {
            if (!navigationShow) {
                Navigation.style.display="block"
                NavigationSun.style.animation="ShowNav 1.5s ease forwards"
                setNavigationShow(true)
                IconMenu1.style.transform="rotate(120deg)"
                IconMenu2.style.transform="rotate(60deg)"
            }else{
                Navigation.style.display="none"
                setNavigationShow(false)
                IconMenu1.style.transform="rotate(0)"
                IconMenu2.style.transform="rotate(0)"
            }         
        }
    }



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
      <div className="menu">
        <button onClick={()=>ShowNavigation()}>
          Menu
          <div className="icon-menu">
            <div className="icon1"></div>
            <div className="icon2"></div>
          </div>
        </button>
      </div>
      <Navgiation/>
    </div>
  );
};

export default Header;
