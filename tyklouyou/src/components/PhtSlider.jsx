import React, { useState } from 'react'
import dataPhtAll from '../data/dataPhtAll'

const PhtSlider = ({slideIndex , setSlideIndex , isSliderShow ,setIsSliderShow}) => {

    const ShowSlider = (e) => {
        let element=e.target
    if (element.classList.contains("slider-all-photos")) {
        setIsSliderShow(false)
    }
};


  return (
    <div className='slider-all-photos' style={{display:isSliderShow? "flex" : "none"}} onClick={ShowSlider}>
      <div className="slider">
        <div className="angle left link-cursor-calendar" onClick={()=>slideIndex==0? setSlideIndex(dataPhtAll.length-1) : setSlideIndex(slideIndex-1)}>
            <img className='link-cursor-calendar' src="./assets/img/angle-up-solid (1).svg" alt="zazazazazaz" />
        </div>
        <div className="angle right link-cursor-calendar" onClick={()=>slideIndex==dataPhtAll.length-1? setSlideIndex(0) : setSlideIndex(slideIndex+1)}>
            <img  className='link-cursor-calendar' src="./assets/img/angle-up-solid (1).svg" alt="zazazazazaz" />
        </div>
        <div className="slide">
            <img src={dataPhtAll[slideIndex].src} alt="" />
            <h3>{dataPhtAll[slideIndex].text}</h3>
        </div>
      </div>
    </div>
  )
}

export default PhtSlider
