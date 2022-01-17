import React from 'react';
import "./ActionButton.css"

function ActionButton({title, color, fontColor, borderColor}) {

    let font = fontColor ? fontColor : "white"

    const style = {
        backgroundColor: `${color}`,
        color: `${font}`,
        borderRadius: 30,
        border: `1px solid ${borderColor}`,
        height: 60,
        width: 220,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    }

    return (
        <div className="ActionedButton" style={style}>
            <p>{title}</p>
        </div>
    );
}

export default ActionButton;
