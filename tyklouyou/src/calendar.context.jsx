import { createContext, useContext, useState } from "react";

const CalendarContext = createContext({
    IsCalendarVisible : false
})

export const CalendarContextProvider = ({children})=>{
    const [isCalendar , setIsCalendar] = useState(false)

    return (
        <CalendarContext.Provider value={{ isCalendar , setIsCalendar}}>
            {children}
        </CalendarContext.Provider>
    )
}
export const useCalendarContext = ()=> useContext(CalendarContext) 

export default CalendarContext