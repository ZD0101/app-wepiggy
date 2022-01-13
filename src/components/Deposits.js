import React from 'react';
import "./Deposits.css"
import RoundButton from "./RoundButton";

function Deposits(props) {
    return (
        <div className="Deposits">
            <div>No deposits yet</div>
            <RoundButton title="Deposit"/>
        </div>
    );
}

export default Deposits;
