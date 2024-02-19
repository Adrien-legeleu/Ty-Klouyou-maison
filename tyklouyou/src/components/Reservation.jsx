import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Reservation = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isOnFooter, setIsOnFooter] = useState(false);
  const [isNotLandingPage, setIsNotLandingPage] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFooter);
    window.addEventListener("scroll", handleScrollLanding);

    return () => {
      window.removeEventListener("scroll", handleScrollFooter);
      window.removeEventListener("scroll", handleScrollLanding);
    };
  }, []);

   const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      gsap.to(".reservation-container", {
        borderRadius: "10px",
        width: "60%",
        duration: 0.3
      });

      gsap.to(".reservation", {
        visibility: "visible",
        opacity: 1,
        duration: 0.3,
      });
    } else {
      gsap.to(".reservation-container", {
        borderRadius: "30px",
        width: "80px",
        duration: 0.3
      });

      gsap.to(".reservation", {
        visibility: "hidden",
        opacity: 0,
        duration: 0.3
      });
    }
  }, [isHovered]);

    

  return (
    <div
      className={`reservation-container ${
        isOnFooter ? "on-footer" : "not-on-footer"
      } `}
      style={{ backgroundColor: !isNotLandingPage ? "#141342" : "white" }}
      onMouseEnter={()=>setIsHovered(!isHovered)}
      onMouseLeave={()=>setIsHovered(!isHovered)}
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
              src={isNotLandingPage ? (
          "./assets/img/calendar (2).png"
        ) : (
          "./assets/img/calendar (1).png"
        )} alt="calendar"
            />
            <p
              className="date-text"
              style={{ color: isNotLandingPage ? "black" : "white" }}
            >{`du ${format(date[0].startDate, "MM/dd/yyyy")} au ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</p>
          </div>
          <p
            className="personn-text"
            style={{ color: isNotLandingPage ? "black" : "white" }}
          >
            8 personnes
          </p>
          <button>modifier</button>
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
  );
};

export default Reservation;
