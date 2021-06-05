import React from "react";

import "./Button.css";

const Button = ({text,whenClicked}) => {
    return (
        <button className="button" onClick={whenClicked}>{text}</button>
    )
};

export default Button;