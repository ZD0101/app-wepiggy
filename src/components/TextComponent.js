import React from 'react';
import "./TextColumn.css"

function TextColumn({title, text}) {
    return (
        <div className="TextColumn">
            <p style={{color: "gray"}}>{title}</p>
            <p>{text}</p>
        </div>
    );
}

export default TextColumn;
