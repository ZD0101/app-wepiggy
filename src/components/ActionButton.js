import React from 'react';

function ActionButton({title, color, fontColor, borderColor}) {

    let font = fontColor ? fontColor : "white"

    return (
        <div className="ActionedButton" style={{
            backgroundColor: `${color}`,
            color: `${font}`,
            borderRadius: 30,
            border: `1px solid ${borderColor}`,
            height: 50,
            width: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 5
        }}>
            <p>{title}</p>
        </div>
    );
}

export default ActionButton;
