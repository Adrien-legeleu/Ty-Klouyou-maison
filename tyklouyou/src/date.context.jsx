import React, { createContext, useContext, useState } from "react";

// Création du contexte
const DateContext = createContext({
    arrivalDate: new Date(),
    departDate: new Date(),
});

// Composant Provider
export const DateContextProvider = ({ children }) => {
    const [arrivalDateContext, setArrivalDateContext] = useState(new Date());
    const [departDateContext, setDepartDateContext] = useState(new Date());

    return (
        <DateContext.Provider value={{ arrivalDateContext, setArrivalDateContext, setDepartDateContext, departDateContext }}>
            {children}
        </DateContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useDateContext = () => useContext(DateContext);

export default DateContext






