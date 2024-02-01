import React, { useEffect, useState } from "react";

const Calendar = () => {
  const [monthIndex, setMonthIndex] = useState(0);
  const month = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  useEffect(() => {
      let year=new Date().getFullYear()
      let nbrMonth = 30;
    switch (monthIndex) {
      case 0:
        nbrMonth = 31;
        break;
        case 1:
          nbrMonth = year%4 == 0 ? 29 : 28;
          break;
      case 2:
        nbrMonth = 31;
        break;
      case 3:
        nbrMonth = 30;
        break;
      case 4:
        nbrMonth = 31;
        break;
      case 5:
        nbrMonth = 30;
        break;
      case 6:
        nbrMonth = 31;
        break;
      case 7:
        nbrMonth = 31;
        break;
      case 8:
        nbrMonth = 30;
        break;
      case 9:
        nbrMonth = 31;
        break;
      case 10:
        nbrMonth = 30;
        break;
      case 11:
        nbrMonth = 31;
        break;

      default:
        break;
    }
  }, [monthIndex]);

  return (
    <div className="calendar-container">
      <div className="calendar">
        <h2>Choisissez dès maintenant vos dates</h2>
        <div className="choice-month">
          <div className="month">
            <h2>{month[monthIndex]}</h2>
          </div>
          <div className="btn-choice-month">
            <div
              className="img"
              onClick={() =>
                setMonthIndex(monthIndex == 0 ? 11 : monthIndex - 1)
              }
            >
              <img src="./assets/img/angle-up-solid (1).svg" alt="" />
            </div>
            <div
              className="img"
              onClick={() =>
                setMonthIndex(monthIndex == 11 ? 0 : monthIndex + 1)
              }
            >
              <img src="./assets/img/angle-up-solid (1).svg" alt="" />
            </div>
          </div>
        </div>
        <div className="calendar-date">
            
        </div>
        <div className="btn-reserve">
          <button>Réservez</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
