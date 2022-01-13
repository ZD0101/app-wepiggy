import React from 'react';

function TextColumn({title, text}) {
    return (
        <div className="TextColumn">
            <p>{title}</p>
            <p>{text}</p>
        </div>
    );
}

export default TextColumn;
