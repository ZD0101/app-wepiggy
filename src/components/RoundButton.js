import React from 'react';
import "./RoundButton.css"

function RoundButton({title, size}) {
    return (
        <div>
            <div className="RoundButton" style={{width: size}}>
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default RoundButton;
