import React from 'react';
import "./Coin.css"
import {Button} from "@mui/material";
import {useNavigate} from "react-router";

function Coin({name, ticker, image, depositMarket, depositTotalAPY, borrowMarket, borrowTotalAPY, liquidity}) {

    let navigate = useNavigate()
    return (
        <div className="Coin" onClick={() => navigate(`${ticker.toLowerCase()}`)}>
            <div className="CoinInfo">
                <img className="CoinInfoImage" src={image} alt={name}/>
                <div className="CoinInfoName">
                    <h4 className="Ticker">{ticker}</h4>
                    <p className="Name">{name}</p>
                </div>
            </div>
            <h3>{depositMarket}M</h3>
            <h3>{depositTotalAPY}%</h3>
            <h3>{borrowMarket}M</h3>
            <h3>{borrowTotalAPY}%</h3>
            <h3>{liquidity}</h3>
            <div className="ActionButtons">
            <Button variant="contained">Deposit</Button>
            <Button variant="contained">Borrow</Button>

            </div>
        </div>
    );
}

export default Coin;
