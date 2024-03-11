import React, { useEffect,  useState } from 'react'

const MessageSuccess = () => {

  const [bubbles, setBubbles] = useState([]);
  const [sizeBubble, setSizeBubble] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
          setSizeBubble( Math.random()*100 + 50 )
            setBubbles(prevBubbles => [...prevBubbles, { id: Date.now() }]);
        }, 1000);
        const interval2 =setInterval(()=>{
          setBubbles([])
        } , 5000)

        return () => clearInterval(interval , interval2);
    }, []);

  return (
    <div className="message-success-container">
      {bubbles.map(bubble => (
                <div key={bubble.id} className="bubble" style={{width: sizeBubble + "px"  , height: sizeBubble + "px" , left: Math.random()*100  + "%" }} />
            ))}
      <div className='message-success'>
      <div className="titles">
        <h1>Message envoyer !</h1>
      <h3>Nous vous répondrons  le plus rapidement possible</h3>
      </div>
      <div className="pub">
        <div className="pub-text">
          <p> <strong>Gratuit?</strong> Oui, vous avez bien entendu! Que vous souhaitiez créer un vlog entre amis, une plateforme d'hébergement, un site professionnel pour votre hôtel ou une boutique en ligne, nous avons toutes les solutions. <a href="#">Découvrez comment démarrer gratuitement votre projet en ligne dès aujourd'hui</a> !</p>
        </div>
      <div className="pub-link">
        <a href="#">Créer votre premier site web gratuitement avec niid</a>
      </div>
      </div>
      <div className="home">
        <button>Accueil</button>
      </div>
    </div>
    </div>
  )
}

export default MessageSuccess
