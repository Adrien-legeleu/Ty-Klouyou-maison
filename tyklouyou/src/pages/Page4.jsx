import React from 'react'
import { NavLink } from 'react-router-dom'

const Page4 = () => {
  return (
    <div className='page4'>
      <h2>Votre Villa</h2>
      <div className="infos">
        <div className="slider">
            <Slider/>
            <button>Voir toutes les photos</button>
        </div>
        <div className="card-infos">
            <div className="cards-container">
                <div className="card" style={{ "--i": "#A6938D" }}>
                <h3>Chambres</h3>
                <ul>
                    <li><img src="./assets/img/iconinfos/chambre.png" alt="icon-villa-tyKlouyou" /> 5 chambres</li>
                    <li><img src="./assets/img/iconinfos/007-lit-simple.png" alt="icon-villa-tyKlouyou" /> 4 lits simples</li>
                    <li><img src="./assets/img/iconinfos/002-lit.png" alt="icon-villa-tyKlouyou" /> 2 lits doubles</li>
                    <li>
                        <NavLink to="/">
                            <span>voir plus</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="card" style={{ "--i": "#E8A951" }}>
                <h3>Salon</h3>
                <ul>
                    <li><img src="./assets/img/iconinfos/003-canape-lit.png" alt="icon-villa-tyKlouyou" />canapé/lit</li>
                    <li><img src="./assets/img/iconinfos/004-table.png" alt="icon-villa-tyKlouyou" /> table à manger</li>
                    <li><img src="./assets/img/iconinfos/018-le-coucher-du-soleil.png" alt="icon-villa-tyKlouyou" /> vue sur la mer</li>
                    <li>
                        <NavLink to="/">
                            <span>voir plus</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="card" style={{ "--i": "#6B2D2D" }}>
                <h3>Extérieur</h3>
                <ul>
                    <li><img src="./assets/img/iconinfos/017-balcon.png" alt="icon-villa-tyKlouyou" /> terrasse orienté mer</li>
                    <li><img src="./assets/img/iconinfos/buisson.png" alt="icon-villa-tyKlouyou" /> clôture intégrale</li>
                    <li><img src="./assets/img/iconinfos/022-jardin.png" alt="icon-villa-tyKlouyou" /> grand jardin</li>
                    <li>
                        <NavLink to="/">
                            <span>voir plus</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

const Slider=()=>{
    return(
        <div className="slide">
            {DataSlider.map((item)=>(
                <div className="image">
                    <img src={item.src} alt="" />
                </div>
            ))}
        </div>
    )
}

const DataSlider=[
    {
        id:"1",
        src:"./assets/img/chambre/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet.jpg",
    },
    {
        id:"2",
        src:"./assets/img/cuisine/beautiful-shot-modern-house-kitchen.jpg",
    },
    {
        id:"3",
        src:"./assets/img/extérieur/beautiful-shot-chaplin-s-world-museum-switzerland-surrounded-by-lush-nature.jpg",
    },
    {
        id:"4",
        src:"./assets/img/salle de bain/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg",
    },
    {
        id:"5",
        src:"./assets/img/salon/interior-with-bid-dining-room-modern-private-house.jpg",
    },
]

export default Page4
