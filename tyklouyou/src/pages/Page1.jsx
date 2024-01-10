import React, {  useState, useRef, useEffect } from "react";

const Page1 = () => {
  const spanRef = useRef();
  const [phraseIndex , setPhraseIndex] = useState(0)
  const [currentPhrase , setCurrentPhrase] = useState("Une magnifique aventure !")

  const phrases = [
    "En bord de mer !",
    "Une grande terrasse !",
    "Vue sur mer !",
    "Une énorme villa !",
    "Pleins d'activités !",
    "Une Incroyable maison !"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let top = Math.random() * 50 + 15;
      const randomValue = Math.random() * 80;
      let left = (randomValue > 20 && randomValue < 60) ? (Math.random() >0.4 ? 10 : 75) : randomValue + 0;
      let rotate = (Math.random() * 30) * (Math.random() > 0.4 ? 1 : -1);

      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setCurrentPhrase(phrases[phraseIndex]);

      spanRef.current.style.top = top + "%";
      spanRef.current.style.left = left + "%";
      spanRef.current.style.transform = `rotate(${rotate}deg)`;
      spanRef.current.classList.add("span-animation");

      setTimeout(() => {
        spanRef.current.classList.remove("span-animation");
      }, 4000);
    }, 5000);
    return () => clearInterval(interval);
  }, [phraseIndex]);


  return (
    <div className="page1">
      <div className="page1-container">
        <img src="./assets/img/logoSea.png" alt="" />
        <h1>Ty Klouyou</h1>
        <span className="span" ref={spanRef}>{currentPhrase}</span>
        <p>
           by <i>W3bLuxury Design</i>
        </p>
      </div>
    </div>
  );
};

export default Page1;
