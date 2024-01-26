import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Photos from "./pages/Photos";
import Pht3 from "./pages/Pht3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity/>} />
        <Route path="/photos" element={<Photos/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
