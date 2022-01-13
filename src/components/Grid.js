import React from 'react';
import "./Grid.css"
import Button from "@mui/material/Button";

function Grid(props) {
    return (
        <div>

            <div className="container">
                <div className="asset">Asset</div>
                <div className="deposit">Deposit Market</div>
                <div className="Deposit-Market">Deposit Market</div>
                <div className="Asset">Asset</div>
                <div className="Deposit-Total-APY">Deposit Total APY</div>
                <div className="Borrow-Market">Borrow Market</div>
                <div className="Borrow-Total-APY">Borrow Total APY</div>
                <div className="Liquidity">Liquidity</div>
                <div className="Action">Action</div>
                <div className="Ethereum">Ethereum</div>
                <div className="M">21.4M</div>
                <div className="Deposit-Value">40M</div>
                <div className="Deposit-APY-Value-">0.4%</div>
                <div className="Borrow-Value">0.5%</div>
                <div className="Borrow-APY">2$</div>
                <div className="Borrow-APY-Value">20M</div>
                <div className="Liquidity-Value">50M</div>
                <div className="Buttons"><Button>Deposit</Button><Button>Borrow</Button></div>
            </div>
        </div>
    );
}

export default Grid;
