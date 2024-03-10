import React, { useEffect, useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import { useDateContext } from "../date.context";
import { useCalendarContext } from "../calendar.context";
import { useNavigate} from 'react-router-dom'

const Contact = () => {

  const serviceId = process.env.YOUR_SERVICE_ID
  const templateId = process.env.YOUR_TEMPLATE_ID

  const navigate = useNavigate()

  const [isActive, setIsActive] = useState(false);
  const [isInfo , setIsInfo] = useState(false)
  const {arrivalDateContext , departDateContext , priceContext , people}= useDateContext()
  const {isCalendar , setIsCalendar}= useCalendarContext()

  const contactContainer = useRef()
  const [contactImg , setContactImg] = useState("./assets/img/img-8k/fd-contact.jpeg")
  const form= useRef()

  const [messageError , setMessageError] = useState(false)

  const transformDate = (date) => {
    if (date) {
      return date.toLocaleDateString();
    } else {
      return ' .../.../...';
    }
  };
  useEffect(()=>{
    const contactContainerWidth = contactContainer.current.offsetWidth
    if (contactContainerWidth >1000) {
      setContactImg("./assets/img/img-8k/fd-contact.jpg")
    }else{
      setContactImg("./assets/img/img-8k/fd-contact.jpeg")
    }
  }, [])

const canSendEmail=(e)=>{
  e.preventDefault()
  if (priceContext !==0) {
    sendEmail()
    setMessageError(false)
    navigate('/contact/remerciement');
  }else{
    setMessageError(true)
    setTimeout(() => {
      setMessageError(false)
    }, 10000);
  }
}


const sendEmail = () => {
  emailjs
    .sendForm("service_yv4ot6c", "template_n5a4a7m", form.current, {
      publicKey: "yHqYcrEoxMUfEpn4K",
    })
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};



  return (
    <div ref={contactContainer} className="contact-container" style={{ background: `url("${contactImg}") center/cover ,  linear-gradient(180deg,  rgba(0, 0, 0, 0.4) 12%, white 88%)` , backgroundBlendMode: "darken" }}>
      <Header />
      <div className="contact">
        <div className="message-send-email-error" style={{visibility: messageError ? "visible" : "hidden" , transform : messageError ? "translateX(0)" : "translateX(50%)" ,opacity: messageError ? 1 :0}}>
            <p style={{animation: messageError ? "Bounce 2.5s infinite ease-in-out " : "none"}}>Vous n'avez pas complété les <strong>informations sur votre séjour</strong></p>
            <div className="cross" onClick={()=> setMessageError(false)}></div>
        </div>
        <div className="contact-form">
          <form className="form" onSubmit={canSendEmail} ref={form}>
            <div className="input">
              <input type="text" placeholder="Prénom" name="user_firstname" required />
            </div>
            <div className="input">
              <input type="text" placeholder="Nom" name="user_name" required/>
            </div>
            <div className="input">
              <input type="text" placeholder="E-mail"  name="user_email" required/>
            </div>
            <div className="input">
              <input type="text" placeholder="Téléphone" name="user_tel" required/>
            </div>
            <div className="info-hidden">
              <input type="hidden" name="people" value={people}/>
            </div>
            <div className="info-hidden">
              <input type="hidden" name="price" value={priceContext}/>
            </div>
            <div className="info-hidden">
              <input type="hidden" name="arrival_date" value={arrivalDateContext.toLocaleDateString()} />
            </div>
            <div className="info-hidden">
              <input type="hidden" name="depart_date" value={departDateContext.toLocaleDateString()}/>
            </div>

           <div className="stay-content">
             <div className="stay-container" onMouseEnter={()=>setIsInfo(!isInfo)} onMouseLeave={()=>setIsInfo(!isInfo)}>
              <p
                className={`text-visible link-cursor `} 
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
                  <div className="stay-people">
                    <p>Personnes:</p>
                    <p>{people}</p>
                  </div>
                </div>
                <div className={`btn-date ${isInfo ? "anim-info-visible-text" : "anim-info-hidden-text"}  `}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsActive(true);
                      setIsCalendar(!isCalendar)
                    }}
                    className=" link-cursor"
                  >
                    Changer date
                  </button>
                </div>
              </div>
            </div>
           </div>
            <textarea placeholder="Entrez un message" name="message" required></textarea>
            <div className="btn">
              <button type="submit" className=" link-cursor">Envoyer</button>
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
            <li className=" link-cursor">Règlement Intérieur</li>
            <li className=" link-cursor">Mentions légales</li>
            <li className=" link-cursor">© WebLuxury Design 2024</li>
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
