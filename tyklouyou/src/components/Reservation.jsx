import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useDateContext } from "../date.context";
import Calendar from "./Calendar";
import { useCalendarContext } from "../calendar.context";

const Reservation = () => {
  const { isCalendar, setIsCalendar } = useCalendarContext();

  const [isOnFooter, setIsOnFooter] = useState(false);
  const [isNotLandingPage, setIsNotLandingPage] = useState(false);
  const { arrivalDateContext, departDateContext, people, priceContext } =
    useDateContext();

  const handleScrollFooter = () => {
    const footer = document.getElementById("footer");
    const footerRect = footer.getBoundingClientRect();
    setIsOnFooter(
      footerRect.top <= window.innerHeight - 30 && footerRect.bottom >= 0
    );
  };
  const handleScrollLanding = () => {
    const page2 = document.getElementById("page2");
    const page2Rect = page2.getBoundingClientRect();
    setIsNotLandingPage(page2Rect.top <= window.innerHeight ? true : false);
  };
  const transformDate = (date) => {
    if (date) {
      return date.toLocaleDateString();
    } else {
      return ".../.../... ";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFooter);
    window.addEventListener("scroll", handleScrollLanding);

    return () => {
      window.removeEventListener("scroll", handleScrollFooter);
      window.removeEventListener("scroll", handleScrollLanding);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const reservationContainer=useRef()

  useEffect(()=>{
    if (reservationContainer.current.offsetWidth > 900) {
      setIsResponsive(false)
    }else{
      setIsResponsive(true)
    }
  },[])

  useEffect(() => {
    if (isResponsive) {
      if (isHovered) {
      gsap.to(".reservation-container", {
        borderRadius: "50px",
        width: "50%",
        height : "60%",
        onComplete: () => {
          gsap.to(".reservation", {
            visibility: "visible",
          });
        },
      });
    } else {
      gsap.to(".reservation", {
        visibility: "hidden",
        onComplete: () => {
          gsap.to(".reservation-container", {
            borderRadius: "30px",
            width: "80px",
            height:"60px"
          });
        },
      });
    }
    } else {
      if (isHovered) {
      gsap.to(".reservation-container", {
        borderRadius: "80px",
        width: "65%",
        onComplete: () => {
          gsap.to(".reservation", {
            visibility: "visible",
          });
        },
      });
    } else {
      gsap.to(".reservation", {
        visibility: "hidden",
        opacity: 1,
        onComplete: () => {
          gsap.to(".reservation-container", {
            borderRadius: "30px",
            width: "80px",
          });
        },
      });
    }
    }
  }, [isHovered]);

  return (
    <div className="reservation">
      <Calendar />
      <div
        className={`reservation-container ${
          isOnFooter ? "on-footer" : "not-on-footer"
        } `}
        style={{ backgroundColor: !isNotLandingPage ? "#141342" : "white" }}
        onMouseEnter={() => setIsHovered(!isHovered)}
        onMouseLeave={() => setIsHovered(!isHovered)}
        ref={reservationContainer}
      >
        <div className="reservation-is-not-hover">
          {!isNotLandingPage ? (
            <img src="./assets/img/icon-search (1).png" alt="" />
          ) : (
            <img src="./assets/img/icon-search (2).png" alt="" />
          )}
        </div>
        <div className="reservation">
          <div className="date">
            <div className="date-text">
              <img
                src={
                  isNotLandingPage
                    ? "./assets/img/calendar (2).png"
                    : "./assets/img/calendar (1).png"
                }
                alt="calendar"
              />
              <p
                className="date-text"
                style={{ color: isNotLandingPage ? "black" : "white" }}
              >{`du ${transformDate(arrivalDateContext)} au ${transformDate(
                departDateContext
              )}`}</p>
            </div>
            <div className="text-personn-price">
              <p
                className="personn-text"
                style={{ color: isNotLandingPage ? "black" : "white" }}
              >
                {people} personnes
              </p>
              <p
                className="price-text"
                style={{ color: isNotLandingPage ? "black" : "white" }}
              >
                {priceContext}€
              </p>
            </div>
            <button onClick={() => setIsCalendar(!isCalendar)}>modifier</button>
          </div>
          <div className="reserve">
            <button
              style={{
                backgroundColor: isNotLandingPage ? "#141342" : "white",
                color: !isNotLandingPage ? "#141342" : "white",
              }}
            >
              Réserver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
