import { createContext, useContext, useState } from "react";

const DateContext= createContext({
    arrivalDate: new Date().toLocaleDateString(),
    departDate: new Date().toLocaleDateString(),
})

export const DateContextProvider = ({children})=>{
    const [arrivalDateContext ,setArrivalDateContext ] = useState(new Date().toLocaleDateString())
    const [departDateContext ,setdepartDateContext ] = useState(new Date().toLocaleDateString())

    return (
        <DateContext.Provider value={{ arrivalDateContext, setArrivalDateContext , setdepartDateContext, departDateContext  }}>
            {children}
        </DateContext.Provider>
    );
}

export const useDateContext = ()=>useContext(DateContext)

