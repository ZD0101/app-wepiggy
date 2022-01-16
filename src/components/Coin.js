import React, {useContext, useEffect, useState} from 'react';
import "./Coin.css"
import {useNavigate} from "react-router";
import {purple} from "@mui/material/colors";
import ActionButton from "./ActionButton";
import Tooltip from '@mui/material/Tooltip';
import {GlobalContext} from "./GlobalContext";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        prevWidth: undefined,
        height: undefined,
        prevHeight: undefined
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize(prevState => ({
                width: window.innerWidth,
                prevWidth: prevState.width,
                height: window.innerHeight,
                prevHeight: prevState.height
            }));
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

function Coin({name, ticker, image, depositMarket, depositTotalAPY, borrowMarket, borrowTotalAPY, liquidity}) {

    let navigate = useNavigate()

    const size = useWindowSize();

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        if (size.prevWidth > 1300 && size.width <= 1300) {
            setDimensions({width: window.innerWidth, height: window.innerHeight})
            console.log(dimensions)
        }
        if (size.prevWidth < 1300 && size.width >= 1300) {
            setDimensions({width: window.innerWidth, height: window.innerHeight})
            console.log(dimensions)
        }
    }, [size])
    return (
        <div className="Coin" onClick={() => navigate(`${ticker.toLowerCase()}`)}>
            <div className="CoinInfo">
                <img className="CoinInfoImage" src={image} alt={name}/>
                <div className="CoinInfoName">
                    <h4 className="Ticker">{ticker}</h4>
                    <p className="Name">{name}</p>
                </div>
            </div>

            <div className="PropertyInfo">
                <Tooltip placement="top" title="Deposit Market"><h3 className="PropertyName">Deposit Market</h3></Tooltip>
                <h3 className="PropertyValue">{depositMarket}M</h3>
            </div>
            {dimensions.width > 1300 ? <div className="PropertyInfo">
                <Tooltip placement="top" title="Deposit APY + Mining APY"><h3 className="PropertyName">Deposit Total APY</h3></Tooltip>
                <h3 className="PropertyValue">{depositTotalAPY}%</h3>
            </div>: ""}

            <div className="PropertyInfo">
                <Tooltip placement="top" title="Borrow APY - Mining APY"><h3 className="PropertyName">Borrow Market</h3></Tooltip>
                <h3 className="PropertyValue">{borrowMarket}M</h3>
            </div>

            {dimensions.width > 1300 ? <div className="PropertyInfo">
                <Tooltip placement="top" title="Borrow APY - Mining APY"><h3 className="PropertyName">Borrow Total APY</h3></Tooltip>
                <h3 className="PropertyValue">{borrowTotalAPY}%</h3>
            </div> : ""}

            {dimensions.width > 1300 ? <div className="PropertyInfo">
                <Tooltip placement="top" title="Liquidity"><h3 className="PropertyName">Liquidity</h3></Tooltip>
                <h3 className="PropertyValue">{liquidity}</h3>
            </div>: ""}
            <div className={dimensions.width < 1300 ? "CoinActionIcons" : "CoinActionButtons"}>
                {dimensions.width < 1300 ? <AccountBalanceWalletIcon width={50}/> : <ActionButton title="Deposit" color="#4D21CA"/>}
                {dimensions.width < 1300 ? <AccountBalanceWalletIcon width={50}/> : <ActionButton title="Borrow" color="#8420D2"/>}
                {/*<Button variant="contained">Deposit</Button>*/}
                {/*<Button variant="contained">Borrow</Button>*/}

            </div>
        </div>
    );
}

export default Coin;
