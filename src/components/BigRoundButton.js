import React from 'react';
import "./BigRoundButton.css"

function BigRoundButton({title}) {
    return (
        <div>
            <div className="BigRoundButton" >
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default BigRoundButton;
