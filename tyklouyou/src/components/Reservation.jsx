import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
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

  return (
    <div className="reservation">
      <div
        className="reservation-container"
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
        <div className="people-button">
          <div className="people">
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
                backgroundColor: toggleDate ? "#003444" : "#006D77",
              }}
            >
              Réserver
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: toggleDate ? "#003444" : "",
        }}
        className={`${
          toggleDate
            ? "date-container date-container-animation-show"
            : "date-container date-container-animation-hide"
        }`}
      >
        <img
          src="./assets/img/croix-petit.png"
          alt="close-croix"
          className={`close ${toggleDate ? "close" : "close close-animation"}`}
          onClick={() => {
            setToggleDate(!toggleDate);
          }}
        />
        <DateRange
          minDate={new Date()}
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
        />
      </div>
    </div>
  );
};

export default Reservation;
