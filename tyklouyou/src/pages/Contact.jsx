import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import { useDateContext } from "../date.context";
import { useCalendarContext } from "../calendar.context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {


  const [isActive, setIsActive] = useState(false);
  const [isInfo , setIsInfo] = useState(false)
  const {arrivalDateContext , departDateContext , priceContext , people}= useDateContext()
  const {isCalendar , setIsCalendar}= useCalendarContext()
  const form = useRef();
  const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;

  const transformDate = (date) => {
    if (date) {
      return date.toLocaleDateString();
    } else {
      return ' .../.../...';
    }
  };
  const canSendEmail=(e)=>{
    e.preventDefault()
    if (priceContext != 0) {
      sendEmail()
    } else {
      toast.error("Veuillez définir un prix")
    }
  }

  const sendEmail = () => {

    emailjs
      .sendForm("service_wq6a24r", "template_nffaw5k", form.current, {
        publicKey: 'q9xLxhpboGXB8QwLA',
      })
      .then(
        () => {
          toast.success("Email send !")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div  className="contact-container" >
      <div className="contact">
      <Header />
      <ToastContainer />
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
      <span className="signature">designed by <a className="link-cursor" href="https://mino-design.netlify.app" target="_">MINO</a></span>
      <Calendar
        isActive={isActive}
        setIsActive={setIsActive} />
      <Footer className="footer-container" />
    </div>
  );
    
};

export default Contact




