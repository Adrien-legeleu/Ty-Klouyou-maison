import { createContext } from "react";

const DateContext= createContext({
    arrivalDate: new Date(),
    departDate: new Date(),
})