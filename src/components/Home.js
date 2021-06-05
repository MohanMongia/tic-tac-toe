import React from 'react';

import Header from "./Header";
import GameBox from "./GameBox";

import "./Home.css";



const Home = () => {
    return (
        <div className="Home">
            <Header />
            <GameBox />
        </div>
    )
};

export default Home;