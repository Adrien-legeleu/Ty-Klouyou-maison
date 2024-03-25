
import React, { createContext, useContext, useEffect, useState } from "react";

let doubleTomorrow = new Date();
doubleTomorrow.setDate(doubleTomorrow  .getDate() + 2);

const DateContext = createContext({
    arrivalDate: new Date(),
    departDate: doubleTomorrow,
    price: null,
    people : 4,
});


export const DateContextProvider = ({ children }) => {
    const [arrivalDateContext, setArrivalDateContext] = useState(new Date());
    const [departDateContext, setDepartDateContext] = useState(doubleTomorrow);
    const [priceContext, setPriceContext] = useState(null);
    const [pricePerNight , setPricePerNight] = useState(null);
    const [people , setPeople] = useState(4)

    useEffect(()=>{
        pricePerMonth()
        calculTotalPrice()
    }, [arrivalDateContext , departDateContext])
    const calculTotalPrice = () => {
    let totalPrice = 0;
    if (arrivalDateContext && departDateContext) {
      const oneDay = 24 * 60 * 60 * 1000;
      const night = Math.round(Math.abs((departDateContext - arrivalDateContext) / oneDay));
      totalPrice = night * pricePerNight;
    }

    setPriceContext(totalPrice);
  };

const pricePerMonth = () => {
    const hightSeasonDate = [["15", "05"], ["14", "08"]];
    const hightSeasonPrice = 340;
    const averageSeasonPrice = 280;
    const lowSeasonDate = [["15", "11"], ["14", "02"]];
    const lowSeasonPrice = 240;

    const dayMonthArrivalDate = arrivalDateContext.toLocaleDateString().split('/').slice(0, 2)


    if (dayMonthArrivalDate[1] >= hightSeasonDate[0][1] && dayMonthArrivalDate[1] <= hightSeasonDate[1][1]) {
        if (dayMonthArrivalDate[0] >= hightSeasonDate[0][0] && dayMonthArrivalDate[1] >= hightSeasonDate[0][1]) {
            setPricePerNight(hightSeasonPrice)
        }
    }
    else if (dayMonthArrivalDate[1] >= lowSeasonDate[0][1] && dayMonthArrivalDate[1] <= lowSeasonDate[1][1]) {
        if (dayMonthArrivalDate[0] >= lowSeasonDate[0][0] && dayMonthArrivalDate[1] >= lowSeasonDate[0][1]) {
            setPricePerNight(lowSeasonPrice)
        }
    } else {
        setPricePerNight(averageSeasonPrice)
    }
}


    return (
        <DateContext.Provider value={{ arrivalDateContext, setArrivalDateContext, setDepartDateContext, departDateContext , pricePerNight ,  priceContext , setPriceContext  ,people , setPeople }}>
            {children}
        </DateContext.Provider>
    );
};

export const useDateContext = () => useContext(DateContext);

export default DateContext






