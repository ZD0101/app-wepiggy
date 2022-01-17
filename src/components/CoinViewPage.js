import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import "./CoinViewPage.css"
import TextColumn from "./TextComponent";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from "@mui/material/Button";
import DepositChart from "./DepositChart";
import CustomPieChart from "./CustomPieChart";
import GraphTabs from "./GraphTabs";
import RoundButton from "./RoundButton";
import ActionButton from "./ActionButton";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

function CoinViewPage(props) {
    const {ticker} = useParams();

    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleChangeIndex = (index) => {
        setSelectedTab(index);
    };

    useEffect(() => {
        console.log(ticker)
    }, [])

    return (
        <div className="CoinViewPage">
            <div className="CoinNameMobile">
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG.png" alt=""/>
                <h1 className="CoinNameTitle" style={{marginRight: 10}}>{ticker.toUpperCase()}</h1>
            </div>
            <div className="CoinBasicInfo">
                <div className="CoinName">
                    <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG.png" alt=""/>
                    <h1 className="CoinNameTitle" style={{marginRight: 10}}>{ticker.toUpperCase()}</h1>
                    <InfoOutlinedIcon/>
                </div>
                <TextColumn title="Price" text="$3,048.39"/>
                <TextColumn title="Price Feed" text="Chainlink"/>
                <TextColumn title="Your Deposit" text="$0"/>
                <TextColumn title="Your Borrowing" text="$0"/>
                <TextColumn title="Used Ratio" text="0%"/>
            </div>

            <GraphTabs/>
            {/*<div className="CoinChart">*/}
            {/*    <CoinChart/>*/}
            {/*</div>*/}

            <div className="CoinUtilization">
                <div className="CoinInfoOne">
                    <div className="CoinInfoOneChart">
                        <CustomPieChart/>
                    </div>
                    <div>
                        <div style={{textAlign: "left"}}>
                            <h4 style={{fontWeight: 500, color: "gray"}}>Available Liquidity</h4>
                            <h3>$ 19.583</h3>
                        </div>
                        <div style={{display: "flex"}}>
                            <div style={{textAlign: "left", marginRight: 20}}>
                                <h4 style={{fontWeight: 500, color: "gray"}}>Available Liquidity</h4>
                                <h3>$ 19.583</h3>
                            </div>
                            <div style={{textAlign: "left"}}>
                                <h4 style={{fontWeight: 500, color: "gray"}}>Available Liquidity</h4>
                                <h3>$ 19.583</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CoinInfoTwo">
                    <div className="Data">
                        <span
                            style={{display: "flex", alignItems: "center"}}>Maximum LTV Ratio <p
                            style={{marginLeft: 10, color: "gray", display: "flex"}}><InfoOutlinedIcon/></p></span>
                        <p>80%</p>
                    </div>
                    <div className="Data">
                        <span style={{
                            display: "flex",
                            alignItems: "center"
                        }}>Liquidation Penalty <p
                            style={{marginLeft: 10, color: "gray", display: "flex"}}><InfoOutlinedIcon/></p></span>
                        <p>8%</p>
                    </div>
                    <div className="Data">
                            <span
                                style={{display: "flex", alignItems: "center"}}>Exchange Rate <p
                                style={{marginLeft: 10, color: "gray", display: "flex"}}><InfoOutlinedIcon/></p></span>
                        <p>1 ETH = 49.53152746 pETH</p>
                    </div>
                    <div className="Data">
                            <span
                                style={{display: "flex", alignItems: "center"}}>Reserve Factor<p
                                style={{marginLeft: 10, color: "gray", display: "flex"}}><InfoOutlinedIcon/></p></span>
                        <p>10%</p>
                    </div>
                    <div className="Data">
                        <span style={{display: "flex", alignItems: "center"}}>Borrow Cap <p
                            style={{marginLeft: 10, color: "gray", display: "flex"}}><InfoOutlinedIcon/></p></span>
                        <p>None</p>
                    </div>
                    <div className="Data">
                        <span style={{display: "flex", alignItems: "center"}}>Deposit Cap <p
                            style={{marginLeft: 10, color: "gray", display: "flex"}}><InfoOutlinedIcon/></p></span>
                        <p>None</p>
                    </div>
                    <div className="Buttons" style={{padding: 5}}>
                        <div className="ButtonsLeft">
                            <ActionButton color="#FF4C94" title="Deposit"/>
                            <ActionButton color="white" borderColor="#FF4C94" fontColor="#FF4C94" title="Withdraw"/>
                        </div>
                        <div className="ButtonsRight">
                            <ActionButton color="#4D21CA" title="Borrow"/>
                            <ActionButton color="white" borderColor="#4D21CA" fontColor="#4D21CA" title="Repay"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoinViewPage;
