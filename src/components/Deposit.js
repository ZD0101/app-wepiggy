import React from 'react';
import "./Deposit.css"
import {TextField} from "@mui/material";
import RoundButton from "./RoundButton";
import BigRoundButton from "./BigRoundButton";

function Deposit({type}) {
    return (
        <div className="Deposit">
            <div className="DepositContent">
                <div className="DepositLeft">
                    <div className="DepositLeftInner">
                        <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG.png" alt=""/>
                        <h1>ETH</h1>
                    </div>
                    <span style={{fontSize: 12}}>Price: $ 3101.95</span>
                </div>
                <div className="DepositRight">
                    <div className="DepositRightInner">
                        <span style={{fontSize: 12}}>Deposit Total APY</span>
                        <span>0.4%</span>
                    </div>
                    <span style={{fontSize: 12}}>Market Details</span>
                </div>
            </div>
            <div className="TextField">
                <TextField fullWidth id="outlined-basic" label={`Please enter the ${type} amount`}  variant="outlined" type="number"/>
            </div>
            <div className="ActionButton">
                {type==="deposit" ? <p style={{fontSize: 14}}>Wallet Balance: 0 ETH</p> : <p style={{fontSize: 14}}>Available Balance: 0 ETH</p>}
                <BigRoundButton title="Insufficient gas fee"/>
            </div>
        </div>
    );
}

export default Deposit;
