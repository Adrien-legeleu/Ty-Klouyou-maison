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
  const [inputvalue, setInputvalue] = useState(3);
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

  const upNumber = () => {
    if (inputvalue < 8) {
      setInputvalue(inputvalue + 1);
    }
  };

  const downNumber = () => {
    if (inputvalue > 0) {
      setInputvalue(inputvalue - 1);
    }
  };
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
    <div className="reservation">
      <div
        className={`reservation-container ${isOnFooter ? "on-footer" : "not-on-footer"} `}
        style={{
          transition: "1s",
          backgroundColor: toggleDate ? "#006D77" : "#003444",
        }}
      >
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
        <div className={`${!responsive ? "people-button" : (peopleReservationResponsive1 ? "people-button people-button-open-responsive1" : (peopleReservationResponsive2 ? "people-button people-button-open-responsive2" : (peopleReservationResponsive1 ? "people-button people-button-close-responsive1" : "people-button people-button-close-responsive2" )))}`}>
          <div className="people" style={{ backgroundColor:peopleReservationResponsive2 ? (toggleDate ? "#006D77" : "#003444") : ""}}>
            <div className="people-container">
              <img src="./assets/img/la-personne.png" alt="personn" />
              <p>Voyageurs</p>
            </div>
            <div className="number">
              <span
                onClick={() => downNumber()}
                style={{
                  transition: "1s",
                  backgroundColor: toggleDate ? "#003444" : "#006D77",
                }}
              >
                -
              </span>
              <input type="number" value={"0" + inputvalue} />
              <span
                onClick={() => upNumber()}
                style={{
                  transition: "1s",
                  backgroundColor: toggleDate ? "#003444" : "#006D77",
                }}
              >
                +
              </span>
            </div>
          </div>
          <div className="reserve">
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
    </div>
  );
};

export default Reservation;
