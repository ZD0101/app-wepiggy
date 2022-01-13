import React, {useEffect} from 'react';
import {useParams} from "react-router";
import "./CoinViewPage.css"
import TextColumn from "./TextComponent";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PieChart from "react-simple-pie-chart";
import Button from "@mui/material/Button";

function CoinViewPage(props) {
    const {ticker} = useParams();

    useEffect(() => {
        console.log(ticker)
    }, [])



    return (
        <div className="CoinViewPage">
            <div className="CoinBasicInfo">
                <div className="CoinName">
                    <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG.png" alt=""/>
                    <h1>{ticker.toUpperCase()}</h1>
                    <InfoOutlinedIcon/>
                </div>
                <TextColumn title="Price" text="3,048.39"/>
                <TextColumn title="Price Feed" text="Chainlink"/>
                <TextColumn title="Your Deposit" text="0"/>
                <TextColumn title="Your Borrowing" text="0"/>
                <TextColumn title="Used Ratio" text="0"/>
            </div>

            <div className="CoinChart">
                Chart goes here
            </div>

            <div className="CoinUtilization">
                <div className="CoinInfoOne">

                </div>

                <div className="CoinInfoTwo">
                    <div className="Data">
                        <span>Maximum LTV Ratio <InfoOutlinedIcon/></span>
                        <p>80%</p>
                    </div>
                    <div className="Data">
                        <span>Liquidation Penalty <InfoOutlinedIcon/></span>
                        <p>8%</p>
                    </div>
                    <div className="Data">
                        <span>Exchange Rate <InfoOutlinedIcon/></span>
                        <p>1 ETH = 49.53152746 pETH</p>
                    </div>
                    <div className="Data">
                        <span>Reserve Factor<InfoOutlinedIcon/></span>
                        <p>10%</p>
                    </div>
                    <div className="Data">
                        <span>Borrow Cap <InfoOutlinedIcon/></span>
                        <p>None</p>
                    </div>
                    <div className="Data">
                        <span>Deposit Cap <InfoOutlinedIcon/></span>
                        <p>None</p>
                    </div>
                    <div className="Buttons">
                        <div className="ButtonsLeft">
                            <Button variant={"contained"}>Deposit</Button>
                            <Button variant={"contained"}>Withdraw</Button>
                        </div>
                        <div className="ButtonsRight">
                            <Button variant={"contained"}>Borrow</Button>
                            <Button variant={"contained"}>Repay</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoinViewPage;
