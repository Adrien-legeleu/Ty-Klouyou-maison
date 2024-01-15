import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const [isSun , setIsSun]=useState(true)
  return (
    <div className='footer' style={{backgroundColor: isSun ? "white" : "black"}}>
      <div className="sun-night" onClick={()=>setIsSun(!isSun)}>
      <img src={isSun ? "./assets/img/icons8-sun.svg" : "./assets/img/icons8-symbole-de-la-lune-60.png"} alt="sun-moon-tyKlouyou" />
      </div>
      <div className="logo-container">
      <h3>Designed by <a href="#">W3bLuxury</a></h3>
      <p>création de site web design</p>
      <a href="#">en savoir plus</a>
      </div>
      <div className="link-container">
        
        <ul className="legal">
          <li>Règlement Intérieur</li>
          <li>Mentions légales</li>
          <li>© WebLuxury Design 2024</li>
        </ul>
        <ul className="pages">
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/">
            <li>Photos</li>
          </NavLink>
          <NavLink to="/">
            <li>Activités</li>
          </NavLink>
          <NavLink to="/">
            <li>Contact</li>
          </NavLink>
        </ul>
        <div className="btn">
        <button>
          Contactez-nous
        </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
