import React, { useContext , createContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import { DateContextProvider } from "./date.context";


const App = () => {

  return (
    <DateContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity/>} />
        <Route path="/photos" element={<Photos/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </DateContextProvider>
  );
};

export default App;
