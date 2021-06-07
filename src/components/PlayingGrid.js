import React from "react";

import whenPlayingGridCellisClicked from "../utils/playingGrid";

import PlayingGridCell from "./PlayingGridCell";

import "./PlayingGrid.css";

const PlayingGrid = ({gridValues,gameStatus,moves,changeGridValues,setGameStatus,setMoves}) => {

    const stateModifiers = {
        changeGridValues : changeGridValues,
        setGameStatus : setGameStatus,
        setMoves : setMoves
    }

    const stateValues = {
        gridValues : gridValues,
        gameStatus : gameStatus,
        moves:moves
    }


    const generateGridCells = () =>{
        return gridValues.map((row,rowIndex) => {
            return row.map((cellValue,columnIndex) => {
               return  <PlayingGridCell key={`${rowIndex}_${columnIndex}`} value={cellValue} />
            })
        });
    }


    return (
        <div className="PlayingGrid" onClick={(e) => whenPlayingGridCellisClicked(e,stateModifiers,stateValues)}>
           {generateGridCells()}
        </div>
    )
}

export default PlayingGrid;