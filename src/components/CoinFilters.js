import React from 'react';
import ActionButton from "./ActionButton";
import "./CoinFilters.css"
import {Tooltip} from "@mui/material";

function CoinFilters(props) {
    return (
        <div className="CoinFilters">
            <div className="CoinInfo">
                <div className="CoinInfoName">
                    <Tooltip placement="top" title="Coin Name"><p className="Name">Name</p></Tooltip>
                </div>
            </div>
            <div className="CoinFiltersInner">
                <Tooltip placement="top" title="Deposit Market"><p className="PropertyName">Deposit Market</p></Tooltip>
                <Tooltip placement="top" title="Deposit APY + Mining APY"><p className="PropertyName">Deposit Total APY%</p></Tooltip>
                <Tooltip placement="top" title="Borrow Market"><p className="PropertyName">Borrow Market</p></Tooltip>
                <Tooltip placement="top" title="Borrow APY - Mining APY"><p className="PropertyName">Borrow Total APY</p></Tooltip>
                <Tooltip placement="top" title="Liquidity"><p className="PropertyName">Liquidity</p></Tooltip>
            </div>
            <div className="CoinActionButtons">
                <Tooltip placement="top" title="Action Buttons"><p>Actions</p></Tooltip>
                {/*<Button variant="contained">Deposit</Button>*/}
                {/*<Button variant="contained">Borrow</Button>*/}

            </div>
        </div>
    );
}

export default CoinFilters;
