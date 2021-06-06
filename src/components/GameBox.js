import React, { useEffect, useState } from "react";

import checkIfGameFinished from "../utils/resultCalculator";
import updateStates from "../utils/updateStates";
import whenResetButtonClicked from "../utils/resetGame.js";

import Button from "./Button";
import Players from "./Players";
import PlayingGrid from "./PlayingGrid";

import "./GameBox.css";

const GameBox = () => {

    const [gameStatus,setGameStatus] = useState(0);
    const [winner,setWinner] = useState(0);
    const [scores,setScores] = useState([0,0]);
    const [turn,setTurn] = useState(0);
    const [gridValues,setGridValues] = useState([[0,0,0],[0,0,0],[0,0,0]]);
    const [moves,setMoves] = useState(0);
    
    
    useEffect(() => {
        const result = checkIfGameFinished(gridValues);
        updateStates(result,scores,moves,setWinner,setScores,setGameStatus,setTurn,setMoves);
    },[gridValues]);


    return (
        <div className="GameBox">
            <Players gameStatus={gameStatus} winner={winner} scores={scores} />
            <PlayingGrid 
                turn={turn}
                changeTurn={setTurn}
                gridValues={gridValues} 
                changeGridValues={setGridValues} 
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                moves={moves}
                setMoves={setMoves}
            />
            <div className="ButtonHolder">
                <Button text="Reset" whenClicked={() => whenResetButtonClicked(setGameStatus,setWinner,setTurn,setGridValues,setMoves,gameStatus)} />
            </div>
        </div>
    )
};

export default GameBox;