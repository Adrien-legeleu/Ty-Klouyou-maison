// Composant React
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const MessageSuccess = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBubbles(prevBubbles => [
                ...prevBubbles,
                {
                    id: Date.now(),
                    size: Math.random() * 100 + 50,
                    left: Math.random() > 0.4 ? Math.random()*100 - 30 : Math.random()*100
                }
            ]);
        }, 500);

        setInterval(() => {
            setBubbles(prevBubbles => prevBubbles.slice(2));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="message-success-container">
            <div className='message-success'>
                <div className="titles">
                    <h1>Message envoyé !</h1>
                    <h3>Nous vous répondrons le plus rapidement possible</h3>
                </div>
                <div className="pub">
                    <div className="pub-text">
                        <p><strong>Gratuit ?</strong> Oui, vous avez bien entendu ! Que vous souhaitiez créer un vlog entre amis, une plateforme d'hébergement, un site professionnel pour votre hôtel ou une boutique en ligne, nous avons toutes les solutions. <a href="#">Découvrez comment démarrer gratuitement votre projet en ligne dès aujourd'hui</a> !</p>
                    </div>
                    <div className="pub-link">
                        <a href="#">Créer votre premier site web <strong>gratuitement</strong> avec niid</a>
                    </div>
                </div>
                <div className="home">
                    <button className='link-cursor'>
                      <NavLink to="/" >
                        <li className="link-cursor">Accueil</li>
                      </NavLink>
                    </button>
                </div>
            </div>
            {bubbles.map(bubble => (
                <div key={bubble.id} className="bubble" style={{ width: bubble.size + "px", height: bubble.size + "px", left: bubble.left + "%" }} />
            ))}
        </div>
    );
};

export default MessageSuccess;
