import { setDate } from "date-fns";
import { getDate } from "date-fns";
import React, { useEffect, useState } from "react";

const Calendar = () => {
  const [monthIndex, setMonthIndex] = useState(0);
  const [firstDay, setFirstDay] = useState("");
  const [secondDay, setSecondDay] = useState("");
  const [arrayDays , setArrayDays]=useState([])
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
  let nbrMonth = 30;
  

  useEffect(() => {
    let year = new Date().getFullYear();
    switch (monthIndex) {
      case 0:
        nbrMonth = 31;
        break;
      case 1:
        nbrMonth = year % 4 == 0 ? 29 : 28;
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
    const daysArray = Array.from({ length: nbrMonth }, (_, index) => index + 1);
    setArrayDays(daysArray)

  }, [monthIndex]);

  const today=new Date();
  const tomorrow=new Date()
  tomorrow.setDate(today.getDate()+1)


  const colorReservation=(e)=>{
    const day=e.target
    if (day.classList.contains("disabled")) {
        console.log("afficher paragraphe");
    }else{
        const dateDay=new Date(tomorrow.getFullYear() , monthIndex , day.textContent)
        setFirstDay(dateDay)
    }
}


  return (
    <div className="calendar-container">
      <div className="calendar">
        <h2 className="title">Choisissez dès maintenant vos dates !</h2>
        <div className="choice-month">
          <div className="month">
            <h2 className="month-text">{month[monthIndex]}</h2>
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
          {arrayDays.map((day) => (
            <div
              className={`day ${new Date(tomorrow.getFullYear(), monthIndex, day) < tomorrow ? "disabled" : ""}`}
              key={day}
              onClick={colorReservation}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="btn-reserve">
          <button>Réservez</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
