import React, {useContext, useEffect, useState} from 'react';
import InfoBlockContainer from "./InfoBlockContainer";
import CoinsList from "./CoinsList";
import "./Market.css"
import ConnectWallet from "./ConnectWallet";
import {GlobalContext} from "./GlobalContext";
import CoinListMobile from "./CoinListMobile";

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

function Market(props) {

    const state = useContext(GlobalContext)

    const size = useWindowSize();

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        if (size.prevWidth > 850 && size.width <= 850) {
            setDimensions({width: window.innerWidth, height: window.innerHeight})
            console.log(dimensions)
        }
        if (size.prevWidth < 950 && size.width >= 950) {
            setDimensions({width: window.innerWidth, height: window.innerHeight})
            console.log(dimensions)
        }
    }, [size])

    return (
        <div>
            {
                state.connected ?
                    <div className="Market">
                        <div className="MarketContent">
                            <div className="MarketContentData">
                                <InfoBlockContainer/>
                                {dimensions.width < 900 ? <CoinListMobile/> : <CoinsList/>}
                            </div>
                        </div>
                    </div> : <ConnectWallet/>}
        </div>
    );
}

export default Market;
