import React from 'react'

const Calendar = () => {
  return (
    <div className='calendar-container'>
      <div className="calendar">
        <h2>Choisissez dès maintenant vos dates</h2>
            <div className="choice-month">
                <div className="month">
                    <h2>Janvier</h2>
                </div>
                <div className="btn-choice-month">
                    <img src="./assets/img/angle-up-solid (1).svg" alt="" />
                    <img src="./assets/img/angle-up-solid (1).svg" alt="" />
                </div>
            </div>
            <div className="calendar-date">

            </div>
            <div className="btn-reserve">
                <button>Réservez</button>
            </div>
      </div>
    </div>
  )
}

export default Calendar
