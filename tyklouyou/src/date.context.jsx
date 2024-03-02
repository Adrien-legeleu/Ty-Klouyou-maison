
import React, { createContext, useContext, useState } from "react";

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const DateContext = createContext({
    arrivalDate: new Date(),
    departDate: tomorrow,
    price: 280
});


export const DateContextProvider = ({ children }) => {
    const [arrivalDateContext, setArrivalDateContext] = useState(null);
    const [departDateContext, setDepartDateContext] = useState(null);
    const [priceContext, setPriceContext] = useState(null);

    return (
        <DateContext.Provider value={{ arrivalDateContext, setArrivalDateContext, setDepartDateContext, departDateContext , priceContext , setPriceContext }}>
            {children}
        </DateContext.Provider>
    );
};

export const useDateContext = () => useContext(DateContext);

export default DateContext






