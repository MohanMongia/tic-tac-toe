import React from "react";

import PlayerName from "./PlayerName";
import ScoreHolder from "./ScoreHolder";

import "./Players.css";

const Players = ({gameStatus,winner,scores}) => {

    const calculateGameStatusString = () => {
        return gameStatus === 0 ? "Lets Play!!" : gameStatus === 1 ? "Continue" : (winner === 0 ? "Draw" : `Winner = ${winner===-1?"Mohan":"Ben"}`)
    }

    return (
        <div className="PlayersGrid">
            <PlayerName playerName="Ben" />
            <div className="GameStatus">
                {calculateGameStatusString()}
            </div>
            <PlayerName playerName="Mohan" />
            <ScoreHolder score={scores[0]} />
            <ScoreHolder score={scores[1]} />
        </div>
    )
}

export default Players;