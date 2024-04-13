import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import { DateContextProvider } from "./date.context";
import { CalendarContextProvider } from "./calendar.context";
import Ruler from "./pages/Ruler";
import LegalMention from "./pages/LegalMention";

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLinkCursor, setIsLinkCursor] = useState(false);
  const [isLinkCursorCalendar, setIsLinkCursorCalendar] = useState(false);

  const moveCursor = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    setCursorPosition({ x, y });
    onLinkCursor(e);
  };

  const onLinkCursor = (e) => {
    const element = e.target;
    setIsLinkCursorCalendar(element.classList.contains("link-cursor-calendar"))
    setIsLinkCursor(element.classList.contains("link-cursor"));
  };


  useEffect(() => {
    const handleMouseMove = (e) => {
      moveCursor(e);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <CalendarContextProvider>
      <DateContextProvider>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions légales" element={<Ruler />} />
              <Route path="/règlement intérieur" element={<LegalMention />} />
            </Routes>
            <div
              className="cursor"
              style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
                background: isLinkCursorCalendar ? "rgba(0, 0, 0, 0.5)" :(isLinkCursor ? "rgb(255, 255, 255)" : "rgb(215, 215, 215)"),
                width: isLinkCursorCalendar ? "15px" : (isLinkCursor ? "60px" : "20px"),
                height:isLinkCursorCalendar ? "15px" : (isLinkCursor ? "60px" : "20px"),
                mixBlendMode: isLinkCursorCalendar ? "normal" : (isLinkCursor ? "exclusion" : "normal"),
              }}
            ></div>
          </div>
        </BrowserRouter>
      </DateContextProvider>
    </CalendarContextProvider>
  );
};

export default App;
