import React, { useEffect, useRef, useState } from "react";
import { useDateContext } from "../date.context";
import { useCalendarContext } from "../calendar.context";

const Calendar = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const textInfo = useRef();
  const {
    arrivalDateContext,
    setArrivalDateContext,
    departDateContext,
    setDepartDateContext,
    priceContext,
    people,
    setPeople
  } = useDateContext();
  const { isCalendar, setIsCalendar } = useCalendarContext();

  const [yearChoice, setYearChoice] = useState([2024, 2025, 2026]);
  const [monthYearIndex, setMonthYearIndex] = useState([
    today.getMonth(),
    yearChoice[0],
  ]);
  const [dayName, setDayName] = useState(["", ""]);
  const [firstDay, setFirstDay] = useState();
  const [secondDay, setSecondDay] = useState();
  const [arrayDays, setArrayDays] = useState([]);


  useEffect(() => {
    const currentMonth = today.toLocaleDateString().split("/")[1][1];
    const currentYear = today.getFullYear();
    const maxYear = currentYear + 2;
    setYearChoice([currentYear, currentYear + 1, maxYear]);
    setMonthYearIndex([currentMonth - 1, yearChoice[0]]);
  }, []);

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
    if (secondDay < firstDay) {
      let dayChange = secondDay;
      setSecondDay(firstDay);
      setFirstDay(dayChange);
    }
  }, [secondDay]);

  useEffect(() => {
    switch (monthYearIndex[0]) {
      case 0:
        nbrMonth = 31;
        break;
      case 1:
        nbrMonth = monthYearIndex[1] % 4 === 0 ? 29 : 28;
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
    setArrayDays(daysArray);
  }, [monthYearIndex[0], monthYearIndex[1]]);

  const removeDate = () => {
    setFirstDay("");
    setSecondDay("");
    dayName[1].style.backgroundColor = "";
    dayName[1].style.color = "";
    dayName[0].style.backgroundColor = "";
    dayName[0].style.color = "";
  };

  const colorReservation = (e) => {
    const day = e.target;

    if (firstDay && secondDay) {
      removeDate();
    }

    if (!firstDay) {
      if (day.classList.contains("disabled")) {
        textInfo.current.textContent =
          "Voux ne pouvez pas réservez à cette date";
        setTimeout(() => {
          textInfo.current.textContent = "";
        }, 2000);
      } else {
        const startDateDay = new Date(
          monthYearIndex[1],
          monthYearIndex[0],
          day.textContent
        );
        setFirstDay(startDateDay);
        setDayName([day, dayName[1]]);
        setArrivalDateContext(startDateDay);
      }
    } else if (firstDay && !secondDay) {
      if (day.classList.contains("disabled")) {
        console.log("afficher paragraphe");
      } else {
        const lastDateDay = new Date(
          monthYearIndex[1],
          monthYearIndex[0],
          day.textContent
        );
        setSecondDay(lastDateDay);
        setDayName([dayName[0], day]);
        setDepartDateContext(lastDateDay);
      }
    }
  };

  const colorDateBetween = (day) => {
    const dayCompare = new Date(monthYearIndex[1], monthYearIndex[0], day);
    const dayYear = dayCompare.getFullYear();
    const dayMonth = dayCompare.getMonth();
    const dayDate = dayCompare.getDate();

    if (firstDay) {
      const dayStartYear = firstDay.getFullYear();
      const dayStartMonth = firstDay.getMonth();
      const dayStart = firstDay.getDate();
      if (
        dayMonth === dayStartMonth &&
        dayDate === dayStart &&
        dayYear === dayStartYear
      ) {
        return ["#141342", "white"];
      } else if (secondDay) {
        const dayEndYear = secondDay.getFullYear();
        const dayEndMonth = secondDay.getMonth();
        const dayEnd = secondDay.getDate();

        if ((secondDay - firstDay) / 1000 / 24 / 3600 > 18) {
          let newSecondDate = new Date(firstDay);
          newSecondDate.setDate(firstDay.getDate() + 18);
          setSecondDay(newSecondDate);
          textInfo.current.textContent =
            "La durée du séjour est de 18 jours au maximum";
          setTimeout(() => {
            textInfo.current.textContent = "";
          }, 2000);
        }

        if (
          (dayMonth === dayEndMonth &&
            dayDate === dayEnd &&
            dayYear === dayEndYear) ||
          (dayCompare > firstDay && dayCompare < secondDay)
        ) {
          return ["#141342", "white"];
        } else {
          return ["", ""];
        }
      } else {
        return ["", ""];
      }
    } else {
      return ["", ""];
    }
  };

  const monthYearIndexDown = () => {
    let currentMonth = monthYearIndex[0];
    let currentYear = monthYearIndex[1];
    if (currentMonth === 0) {
      if (currentYear === yearChoice[0]) {
        currentMonth = 0;
        currentYear = yearChoice[0];
      } else {
        currentMonth = 11;
        currentYear -= 1;
      }
    } else {
      currentMonth -= 1;
    }
    return [currentMonth, currentYear];
  };
  const monthYearIndexUp = () => {
    let currentMonth = monthYearIndex[0];
    let currentYear = monthYearIndex[1];
    if (currentMonth === 11) {
      if (currentYear === yearChoice[2]) {
        currentMonth = 11;
        currentYear = yearChoice[2];
      } else {
        currentMonth = 0;
        currentYear += 1;
      }
    } else {
      currentMonth += 1;
    }
    return [currentMonth, currentYear];
  };

  const transformDate = (date) => {
    if (date) {
      return date.toLocaleDateString();
    } else {
      return today.toLocaleDateString();
    }
  };


  const [dayColorHover, setDayColorHover] = useState([]);

  const handleColorHoverEnter = (e) => {
    const dayHover = e.target;
    const dayHoverDate = new Date(
      monthYearIndex[1],
      monthYearIndex[0],
      dayHover.textContent
    );
    const allDayMonth = document.querySelectorAll(".day");

    let newDayColorHover = [];

    if (firstDay && (dayHoverDate - firstDay) / 1000 / 24 / 3600 > 18) {
      let newDate = new Date(firstDay);
      newDate.setDate(firstDay.getDate() + 18);
      textInfo.current.textContent =
        "La durée du séjour est de 18 jours au maximum";
      setTimeout(() => {
        textInfo.current.textContent = "";
      }, 2000);
    }

    allDayMonth.forEach((day) => {
      const dayDate = new Date(
        monthYearIndex[1],
        monthYearIndex[0],
        day.textContent
      );

      if (
        firstDay &&
        !secondDay &&
        dayDate > firstDay &&
        dayDate < dayHoverDate
      ) {
        day.style.backgroundColor = "#1413428a";
        day.style.color = "white";
        newDayColorHover.push(day);
      }
    });

    setDayColorHover(newDayColorHover);
  };

  const handleColorHoverLeave = () => {
    if (!secondDay) {
      dayColorHover.forEach((day) => {
        day.style.color = "";
        day.style.backgroundColor = "";
      });
    }
  };

  const prevDayMonth = () => {
    const nbrDayPrev =
      new Date(monthYearIndex[1], monthYearIndex[0], 1).getDay() - 1;
    let nbrDay = [];
    for (let i = 0; i < nbrDayPrev; i++) {
      nbrDay.push(i);
    }

    return nbrDay;
  };

  const isYear = (year) => {
    if (year === monthYearIndex[1]) {
      return "current-year";
    } else {
      return "";
    }
  };

  return (
    <div
      className={`calendar-container ${
        isCalendar ? "visible-calendar-container" : "hidden-calendar-container"
      }`}
    >
      <div
        className={`calendar ${
          isCalendar ? "visible-calendar" : "hidden-calendar"
        }`}
      >
        <div className="calendar-date">
          <div className="btn-choice-month">
            <div
              className="img"
              onClick={() => setMonthYearIndex(monthYearIndexDown())}
            >
              <img src="./assets/img/angle-up-solid (1).svg" alt="" />
            </div>
            <div className="month">
              <h2 className="month-text">{month[monthYearIndex[0]]}</h2>
            </div>
            <div
              className="img"
              onClick={() => setMonthYearIndex(monthYearIndexUp())}
            >
              <img src="./assets/img/angle-up-solid (1).svg" alt="" />
            </div>
          </div>
          <div className="calendar-content">
            <ul className="day-text">
              <li>lun.</li>
              <li>mar.</li>
              <li>mer.</li>
              <li>jeu.</li>
              <li>ven.</li>
              <li>sam.</li>
              <li>dim.</li>
            </ul>
            <div className="date">
              {prevDayMonth().map((day) => {
                return <div className="prev-date" key={day}></div>;
              })}

              {arrayDays.map((day) => (
                <div
                  className={`day ${
                    new Date(monthYearIndex[1], monthYearIndex[0], day) <
                    tomorrow
                      ? "disabled"
                      : ""
                  }`}
                  key={day}
                  onClick={colorReservation}
                  onMouseEnter={handleColorHoverEnter}
                  onMouseLeave={handleColorHoverLeave}
                  style={{
                    backgroundColor: colorDateBetween(day)[0],
                    color: colorDateBetween(day)[1],
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
            <p className="text-infos" ref={textInfo}></p>
          </div>
        </div>
        <div className="infos-container">
          <h3>Infos</h3>
          <div className="info-date">
            <p>
              du <span> {transformDate(arrivalDateContext)} </span> au{" "}
              <span>{transformDate(departDateContext)}</span>{" "}
            </p>
            <p>{priceContext}€</p>
          </div>
          <div className="choice-parameter">
            <ul className="choice-year">
              {yearChoice.map((year) => (
                <li
                  onClick={() => setMonthYearIndex([monthYearIndex[0], year])}
                  className={isYear(year)}
                  key={year}
                >
                  {year}
                </li>
              ))}
            </ul>

            <div className="choice-personn">
              <input
                type="range"
                max="8"
                min="1"
                defaultValue="4"
                id="inputRange"
                
                onChange={(e) => setPeople(e.target.value)}
              />
              <span
                style={{ left: `calc(${(people / 8) * 100}% - 25px)` }}
                className="range-value"
              >
                {people}
              </span>
              <div className="info-icon">
                <img src="./assets/img/icons8-info-120.png" alt="" />
                <div className="icon">
                  <span>Nombre de personnes durant le séjour</span>
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <button onClick={() => setIsCalendar(!isCalendar)}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
