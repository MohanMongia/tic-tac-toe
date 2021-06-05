import React from "react";

import "./ScoreHolder.css";

const ScoreHolder = ({score}) => {
    return (
        <div className="ScoreHolder">
            {score}
        </div>
    )
};

export default ScoreHolder;