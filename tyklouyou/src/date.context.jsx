import React, { createContext, useContext, useState } from "react";

const DateContext = createContext({
    arrivalDate: new Date(),
    departDate: new Date(),
});

export const DateContextProvider = ({ children }) => {
    const [arrivalDateContext, setArrivalDateContext] = useState(new Date());
    const [departDateContext, setDepartDateContext] = useState(new Date());

    return (
        <DateContext.Provider value={{ arrivalDateContext, setArrivalDateContext, setDepartDateContext, departDateContext }}>
            {children}
        </DateContext.Provider>
    );
};

export const useDateContext = () => useContext(DateContext);

export default DateContext






