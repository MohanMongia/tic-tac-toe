import React from "react";

import "./PlayerName.css";

const PlayerName = ({playerName}) => {
    return (
        <div className="PlayerName">
            {playerName}
        </div>
    )
};

export default PlayerName;