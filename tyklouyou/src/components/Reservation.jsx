import React, {  useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Reservation = () => {
    const dateContainer = useRef()
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [inputvalue ,setInputvalue]=useState(3);

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


const [toggleDate , setToggleDate]=useState(false)
const [toggleDateAngle , setToggleDateAngle]=useState(false)

const ShowDateContainer=()=>{
    dateContainer.current.style.transition="0.25s ease-in"
    if (!toggleDate) {
        dateContainer.current.style.opacity="1"
        dateContainer.current.style.backgroundColor="#003444"
        setToggleDate(true)
    }else{
         dateContainer.current.style.opacity="0"
        dateContainer.current.style.backgroundColor=""  
        setToggleDate(false)
    }
}
const AngleDateRotate = () => {
  setToggleDateAngle(!toggleDateAngle);
};




  return (
    <div className="reservation">
      <div className="reservation-container">
        <div className="date-text">
          <img src="./assets/img/time-and-calendar.png" alt="calendar" />
          <span>{`du ${format(date[0].startDate, "MM/dd/yyyy")} au ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          <img src="./assets/img/fleche-vers-le-bas.png" alt="angle-down" className={`${toggleDateAngle ? "angle-rotated angle-true" : "angle-false"}`}
            
          onClick={()=>{
            ShowDateContainer()
            AngleDateRotate()
            }} 
            />
        </div>
        <div className="people-button">
          <div className="people">
            <div className="people-container">
                <img src="./assets/img/la-personne.png" alt="personn" />
                <p>Voyageurs</p>
            </div>
            <div className="number">
              <span onClick={()=>downNumber()}>-</span>
              <input type="number"  value={"0" + inputvalue}/>
              <span onClick={()=>upNumber()}>+</span>
            </div>
          </div>
          <div className="reserve">
            <button>Réserver</button>
          </div>
        </div>
      </div>
      <div className="date-container" ref={dateContainer}>
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
