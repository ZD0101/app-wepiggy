import React from 'react';
import "./InfoBlock.css"

function InfoBlock({title, price}) {
    return (
        <div className="InfoBlock">
            <h3 className="InfoBlockTitle">{title}</h3>
            <h1 className="InfoBlockPrice">{price}</h1>
        </div>
    );
}

export default InfoBlock;
