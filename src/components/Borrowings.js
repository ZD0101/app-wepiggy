import React from 'react';
import RoundButton from "./RoundButton";
import "./Borrowings.css"

function Borrowings(props) {
    return (
        <div className="Borrowings">
            <div>No borrowings yet</div>
            <br/>
            <RoundButton title="Borrowings"/>
        </div>
    );
}

export default Borrowings;
