import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const Reservation = ({ setToggleDate, toggleDate }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [peopleReservationResponsive1, setPeopleReservationResponsive1] = useState(false);
  const [peopleReservationResponsive2, setPeopleReservationResponsive2] = useState(false);
  const [responsive, setResponsive] = useState(false);
   const [isOnFooter, setIsOnFooter] = useState(false);


  const handleScroll = () => {
    const footer = document.getElementById("footer");
    const footerRect = footer.getBoundingClientRect();
    setIsOnFooter(footerRect.top <= window.innerHeight && footerRect.bottom >= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const reservationPeopleResponsive=()=>{
    if (window.innerWidth < 1000) {
      setResponsive(true)
      if (window.innerWidth > 700) {
        setPeopleReservationResponsive1(true)
      }else{
        setPeopleReservationResponsive2(true)
      }
    }else{
      setPeopleReservationResponsive1(false)
      setPeopleReservationResponsive2(false)
      setResponsive(false)
    }
  }
  useEffect(()=>{
    if (toggleDate) {
        reservationPeopleResponsive()
    }else{
      setPeopleReservationResponsive1(false)
      setPeopleReservationResponsive2(false)
    }
  },[toggleDate])

  return (
      <div
        className={`reservation-container ${isOnFooter ? "on-footer" : "not-on-footer"} `}
        style={{
          backgroundColor: toggleDate ? "#006D77" : "#003444",
        }}
      >
        <div className="reservation-is-not-hover">

        </div>
        <div className="reservation">
          <div
          className="date-text"
          onClick={() => {
            setToggleDate(!toggleDate);
          }}
        >
          <img src="./assets/img/time-and-calendar.png" alt="calendar" />
          <span>{`du ${format(date[0].startDate, "MM/dd/yyyy")} au ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          <img
            src="./assets/img/fleche-vers-le-bas.png"
            alt="angle-down"
            className={`${
              toggleDate ? "angle-rotated angle-true" : "angle-false"
            }`}
          />
        </div>
          <div className={`${!responsive ? "reserve" : (peopleReservationResponsive1 ? "reserve reserve-open-responsive1" : (peopleReservationResponsive2 ? "reserve reserve-open-responsive2" : (peopleReservationResponsive1 ? "reserve reserve-close-responsive1" : "reserve reserve-close-responsive2" )))}`}>
            <button
              style={{
                transition: "1s",
                backgroundColor: responsive ? "red" :  (toggleDate ? "#003444" : "#006D77"),
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
