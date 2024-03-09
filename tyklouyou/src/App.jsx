import React, { useState, useEffect } from "react";
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
    onLinkCursor(e);
    // onMagneticLinkHover(e);
  };

  const onLinkCursor = (e) => {
    const element = e.target;
    setIsLinkCursor(element.classList.contains("link-cursor"));
  };

  // const onMagneticLinkHover = (e) => {
  //   const element = e.target;
  //   if (element.classList.contains("magnetic-link")) {
  //     const rect = element.getBoundingClientRect();
  //     const x = e.clientX - rect.left;
  //     const y = e.clientY - rect.top;
  //     const transX = x - element.offsetWidth / 2;
  //     const transY = y - element.offsetHeight / 2;
  //     element.style.transform = `translate(${transX}px, ${transY}px)`;
  //   }
  // };
  // const notMagneticHover = (e) => {
  //   const element = e.target;
  //   if (element.classList.contains("magnetic-link")) {
  //     element.style.transform = "";
  //   }
  // };

  useEffect(() => {
    const handleMouseMove = (e) => {
      moveCursor(e);
    };

    document.addEventListener("mousemove", handleMouseMove);
    // document.addEventListener("mouseout", notMagneticHover);

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
            </Routes>
            <div
              className="cursor"
              style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
                background: isLinkCursor ? "rgb(255, 255, 255)" : "rgb(215, 215, 215)",
                width: isLinkCursor ? "60px" : "20px",
                height: isLinkCursor ? "60px" : "20px",
                mixBlendMode: isLinkCursor ? "exclusion" : "normal",
              }}
            ></div>
          </div>
        </BrowserRouter>
      </DateContextProvider>
    </CalendarContextProvider>
  );
};

export default App;
