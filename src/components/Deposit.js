import React from 'react';
import "./Deposit.css"
import {TextField} from "@mui/material";
import RoundButton from "./RoundButton";

function Deposit({type}) {
    return (
        <div className="Deposit">

            <div className="DepositContent">
                <div className="DepositLeft">
                    <div className="DepositLeftInner">
                        <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG.png" alt=""/>
                        <h1>ETH</h1>
                    </div>
                    <span>Price: $ 3101.95</span>
                </div>
                <div className="DepositRight">
                    <div className="DepositRightInner">
                        <span>Deposit Total APY</span>
                        <span>0.4%</span>
                    </div>
                    <span>Market Details</span>
                </div>
            </div>
            <div className="TextField">
                <TextField fullWidth id="outlined-basic"  variant="outlined" placeholder={`Please enter the ${type} amount`} type="number"/>
            </div>
            <div className="ActionButton">
                {type==="deposit" ? <p>Wallet Balance: 0 ETH</p> : <p>Available Balance: 0 ETH</p>}
                <RoundButton title="Insufficient gas fee"/>
            </div>
        </div>
    );
}

export default Deposit;
