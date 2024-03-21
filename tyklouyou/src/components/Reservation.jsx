import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useDateContext } from "../date.context";
import Calendar from "./Calendar";
import { useCalendarContext } from "../calendar.context";
import { NavLink } from "react-router-dom";

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
  const [isResponsiveReservation, setIsResponsiveReservation] = useState(false);
  const [isWideScreen , setIsWideScreen] = useState(false)

 useEffect(() => {
    if (window.innerWidth > 900) {
      setIsResponsiveReservation(false);
    } else {
      setIsResponsiveReservation(true);
    }
    if (window.innerWidth < 600) {
      setIsWideScreen(true)
    }else{
      setIsWideScreen(false)
    }
    console.log(isWideScreen);
}, []);



  useEffect(() => {
    if (isResponsiveReservation) {
      if (isHovered) {
        gsap.to(".reservation-container", {
          borderRadius: "50px",
          width: isWideScreen ? "80%" : "60%",
          height: isWideScreen ? "30%" : "25%",
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
              height: "60px",
            });
          },
        });
      }
    } else {
      if (isHovered) {
        gsap.to(".reservation-container", {
          borderRadius: "80px",
          width: "65%",
          height: "60px",
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
              height: "60px",
            });
          },
        });
      }
    }
  }, [isHovered, isResponsiveReservation]);

  return (
    <div className="reservation-content" >
      <Calendar />
      <div
        className={`reservation-container ${
          isOnFooter ? "on-footer" : "not-on-footer"
        } `}
        style={{ backgroundColor: !isNotLandingPage ? "#141342" : "white" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        
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
            <div className="text-personn-price" style={{ borderLeft: isResponsiveReservation ?  "none"  : (isNotLandingPage ? "1px solid rgba(0, 0, 0, 0.5)" : "1px solid rgba(255, 253, 253, 0.5)") , borderRight: isResponsiveReservation ? "none" : (isNotLandingPage ? "1px solid rgba(0, 0, 0, 0.5)" : "1px solid rgba(255, 253, 253, 0.5)") }}>
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
          </div>
          <div className="reserve-change">
            <button className=" link-cursor btn-change" onClick={() => setIsCalendar(!isCalendar)}>modifier</button>
            <NavLink to="/contact">
              <button
              style={{
                backgroundColor: isNotLandingPage ? "#141342" : "white",
                color: !isNotLandingPage ? "#141342" : "white",
              }}
              className=" link-cursor btn-reserve"
            >
              Réserver
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
