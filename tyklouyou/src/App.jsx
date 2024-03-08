import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import { DateContextProvider } from "./date.context";
import { CalendarContextProvider } from "./calendar.context";

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const moveCursor = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    setCursorPosition({ x, y });
  };

  return (
    <CalendarContextProvider>
      <DateContextProvider>
        <BrowserRouter>
          <div className="app" onMouseMove={moveCursor}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <div
              className="cursor"
              style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
              }}
            ></div>
          </div>
        </BrowserRouter>
      </DateContextProvider>
    </CalendarContextProvider>
  );
};

export default App;
