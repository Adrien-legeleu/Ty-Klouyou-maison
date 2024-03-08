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
  const [isLinkCursor, setIsLinkCursor] = useState(false);

  const moveCursor = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    setCursorPosition({ x, y });
    onLinkCursor(e)
  };

  const onLinkCursor=(e)=>{
    const element = e.target
    if (element.classList.contains("link-cursor")) {
      setIsLinkCursor(true)
    }else{
      setIsLinkCursor(false)
    }
  }

  return (
    <CalendarContextProvider>
      <DateContextProvider>
        <BrowserRouter>
          <div onMouseMove={moveCursor}>
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
                background: isLinkCursor ? "rgba(0, 0, 0, 0.2)" : "white",
                border: isLinkCursor ? "2px solid whitesmoke" : "none",
                width: isLinkCursor ? "80px" : "20px",
                height: isLinkCursor ? "80px" : "20px",
              }}
            ></div>
          </div>
        </BrowserRouter>
      </DateContextProvider>
    </CalendarContextProvider>
  );
};

export default App;
