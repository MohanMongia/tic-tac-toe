import React from "react";

import {decodeCellText} from "../utils/decodeValueToXO";

import "./PlayingGridCell.css";

const PlayingGridCell = ({value}) => {
    return (
        <div className="PlayingGridCell">
            {decodeCellText(value)}          
        </div>
    )
}

export default PlayingGridCell;