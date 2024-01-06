import React, { useEffect, useState } from "react";
import Header from "./Header";

const Page1 = () => {
            const messArray = [
            "En bord de mer !",
            "Une grande terrasse !",
            "Vue sur mer !",
            "Une énorme villa !",
            "Pleins d'activités !"
        ];


    return (
        <div className="page1">
            <Header />
            <div className="page1-container">
                <img src="./assets/img/logoSea.png" alt="" />
                <h1>Ty Klouyou</h1>
                <span>{mess}</span>
                <p>Create by <i>W3bLuxury Design</i></p>
            </div>
        </div>
    );
};

export default Page1;
