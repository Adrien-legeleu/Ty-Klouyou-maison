import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import { useDateContext } from "../date.context";
import { useCalendarContext } from "../calendar.context";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  const [isInfo , setIsInfo] = useState(false)
  const {arrivalDateContext , departDateContext , priceContext}= useDateContext()
  const {isCalendar , setIsCalendar}= useCalendarContext()

  const contactContainer = useRef()
  const [contactImg , setContactImg] = useState("./assets/img/img-8k/fd-contact (2).jpg")

  const transformDate = (date) => {
    if (date) {
      return date.toLocaleDateString();
    } else {
      return ' .../.../...';
    }
  };
  useEffect(()=>{
    const contactContainerWidth = contactContainer.current.offsetWidth
    console.log(contactContainerWidth);
    if (contactContainerWidth >1000) {
      setContactImg("./assets/img/img-8k/fd-contact.jpg")
    }else{
      setContactImg("./assets/img/img-8k/fd-contact (2).jpg")
    }
  }, [])


  return (
    <div ref={contactContainer} className="contact-container" style={{ background: `url("${contactImg}") center/cover ,  linear-gradient(180deg,  rgba(0, 0, 0, 0.4) 12%, white 88%)` , backgroundBlendMode: "darken" }}>
      <Header />
      <div className="contact">
        <div className="contact-form">
          <form className="form">
            <div className="input">
              <input type="text" placeholder="Prénom" />
            </div>
            <div className="input">
              <input type="text" placeholder="Nom" />
            </div>
            <div className="input">
              <input type="text" placeholder="E-mail" />
            </div>
            <div className="input">
              <input type="text" placeholder="Téléphone" />
            </div>

           <div className="stay-content">
             <div className="stay-container" onMouseEnter={()=>setIsInfo(!isInfo)} onMouseLeave={()=>setIsInfo(!isInfo)}>
              <p
                className={`text-visible  `} 
              >
                Informations sur votre séjour
              </p>
              <div className={`stay ${isInfo ? "anim-info-visible" : "anim-info-hidden"}  `} >
                <div className={`stay-date ${isInfo ? "anim-info-visible-text" : "anim-info-hidden-text"}  `}>
                  <p>Départ / Arrivée : </p>
                  <div className="date-content">
                    <span>{transformDate(arrivalDateContext)}</span>
                    <span>{transformDate(departDateContext)}</span>
                  </div>
                  <div className="stay-price">
                    <p>Prix:</p>
                    <p>{priceContext}€</p>
                  </div>
                </div>
                <div className={`btn-date ${isInfo ? "anim-info-visible-text" : "anim-info-hidden-text"}  `}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsActive(true);
                      setIsCalendar(!isCalendar)
                    }}
                  >
                    Changer date
                  </button>
                </div>
              </div>
            </div>
           </div>
            <textarea placeholder="Entrez un message"></textarea>
            <div className="btn">
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
        <div className="contact-text">
          <div className="title">
            <h1>Contactez-nous !</h1>
          </div>
          <div className="text">
            <p>
              Toutes les informations nécessaires, regroupant les détails sur
              l'accès et la localisation précise, seront communiquées après la
              finalisation du paiement.
            </p>
            <p>
              Nous vous invitons à entrer en contact avec le propriétaire pour
              avancer dans le processus de paiement, qui sera effectué une fois
              que le propriétaire aura pris connaissance de votre message.
            </p>
          </div>
        </div>
      </div>
          <ul className="info-legal">
            <li>Règlement Intérieur</li>
            <li>Mentions légales</li>
            <li>© WebLuxury Design 2024</li>
          </ul>
      <span className="signature">designed by WebLuxury</span>
      <Calendar
        isActive={isActive}
        setIsActive={setIsActive} />
      <Footer className="footer-container" />
    </div>
  );
};

export default Contact;
