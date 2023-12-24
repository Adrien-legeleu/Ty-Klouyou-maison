import React, { useEffect, useState } from "react";
import Page2Slider from "./Page2Slider";

const Page2 = () => {
  const dataSlider = [
    {
      title: "En bord de la mer !",
      img: "Photo _  Plage de Fort-Bloqué à Ploemeur • _Light_  • Erwan LE ROUX Photographe.jpg",
      para: "La villa Ty klouyou est situé en bord de mer ! La plage est situé a moins de 100 mètres et de magnifique falaise s'y trouvent également",
      btn: "voir Maps",
    },
    {
      title: "Un grand espace !",
      img: "salon/interior-with-bid-dining-room-modern-private-house.jpg",
      para: "La Villa Ty Klouyou dispose également d'un énorme salon pouvant accueilir une dizaine de personne , avec une vue sur la mer",
      btn: "voir Photos",
    },
    {
      title: "Vue sur mer !",
      img: "extérieur/outdoor-balcony.jpg",
      para: "Une grande terrasse de plus de 40 m² vous donnera une magnifique vue sur la mer et vous permettra de manger dehors  en famille",
      btn: "voir Photos",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = dataSlider.length;

  let autoScroll = true;
  let slideInterval;
  let intervalTime = 8000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="page2">
      <div className="page2-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-big-left-line-filled"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke=""
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="arrow left"
          onClick={() => prevSlide()}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h5a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-5 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
            strokeWidth="0"
            fill="currentColor"
          />
          <path
            d="M4.415 12l6.585 -6.586v3.586l.007 .117a1 1 0 0 0 .993 .883l5 -.001v4l-5 .001a1 1 0 0 0 -1 1v3.586l-6.585 -6.586z"
            strokeWidth="0"
            fill="currentColor"
          />
          <path
            d="M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
            strokeWidth="0"
            fill="currentColor"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-big-right-line-filled"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke=""
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="arrow right"
          onClick={() => nextSlide()}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-4.999a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l4.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
            strokidth="0"
            fill="currentColor"
          />
          <path
            d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
            strokeWidth="0"
            fill="currentColor"
          />
        </svg>
        <div className="slider">
          {dataSlider.map((data, index) => (
            <Page2Slider
              data={data}
              key={index}
              index={index}
              currentSlide={currentSlide}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;
