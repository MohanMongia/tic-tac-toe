import React from "react";

import whenPlayingGridCellisClicked from "../utils/playingGrid";

import PlayingGridCell from "./PlayingGridCell";

import "./PlayingGrid.css";

const PlayingGrid = ({turn,changeTurn,gridValues,gameStatus,changeGridValues,setGameStatus}) => {

    const stateModifiers = {
        changeTurn : changeTurn,
        changeGridValues : changeGridValues,
        setGameStatus : setGameStatus
    }

    const stateValues = {
        turn : turn,
        gridValues : gridValues,
        gameStatus : gameStatus
    }


    const generateGridCells = () =>{
        return gridValues.map((row,rowIndex) => {
            return row.map((cellValue,columnIndex) => {
               return  <PlayingGridCell key={`${rowIndex}_${columnIndex}`} value={cellValue} />
            })
        })
    }


    return (
        <div className="PlayingGrid" onClick={(e) => whenPlayingGridCellisClicked(e,stateModifiers,stateValues)}>
           {generateGridCells()}
        </div>
    )
}

export default PlayingGrid;