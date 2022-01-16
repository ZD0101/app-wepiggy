import React, {useContext, useState} from 'react';
import Deposit from "./Deposit";
import "./DepositWithdraw.css"
import {Box, ButtonGroup} from "@mui/material";
import {GlobalContext} from "./GlobalContext";
import ConnectWallet from "./ConnectWallet";

function DepositWithdraw({left, right}) {

    const state = useContext(GlobalContext)

    const [isLeft, setIsLeft] = useState(true)

    return (
        <div>
            {
                state.connected ?
                    <div className="DepositWithdraw">
                        <div className="Buttons">
                            <ButtonGroup>
                                <div className={isLeft ? "Button Active" : "Button"} onClick={() => setIsLeft(true)}>
                                    <h2>{left}</h2></div>
                                <div className={!isLeft ? "Button Active" : "Button"} onClick={() => setIsLeft(false)}>
                                    <h2>{right}</h2></div>
                            </ButtonGroup>
                        </div>
                        <div className="Items">
                            <div className="ItemsLeft">
                                {isLeft ? <Deposit type="deposit"/> : <Deposit type="withdraw"/>}
                            </div>
                            <div className="ItemsRight">
                                <Box display="flex"
                                     flexDirection="row"
                                     justifyContent="space-between"
                                     margin="20px">
                                    <Box display="flex"
                                         flexDirection="column"
                                         alignItems="flex-start">
                                        <p className="DepositInfoText">Deposit Amount</p>
                                        <p className="DepositInfoText">(ETH)</p>
                                    </Box>
                                    <p className="TextValue">0</p>
                                </Box>

                                <hr/>

                                <Box display="flex"
                                     flexDirection="row"
                                     justifyContent="space-between"
                                     margin="20px">
                                    <p className="DepositInfoText">Available Amount</p>
                                    <p className="TextValue">$0</p>
                                </Box>
                                <hr/>

                                <Box display="flex"
                                     flexDirection="column"
                                     justifyContent="space-between"
                                     margin="20px">
                                    <div style={{display: "flex", justifyContent: 'space-between'}}>
                                        <p className="DepositInfoText">Deposit APY</p>
                                        <p className="TextValue">0.22%</p>
                                    </div>
                                    <div style={{display: "flex", justifyContent: 'space-between'}}><p
                                        className="DepositInfoText">Mining APY</p>
                                        <p className="TextValue">0.17%</p></div>
                                    <div style={{display: "flex", justifyContent: 'space-between'}}><p
                                        className="DepositInfoText">Maximum LTV Ratio</p>
                                        <p className="TextValue">80%</p></div>
                                </Box>
                            </div>

                        </div>

                    </div> : <ConnectWallet/>}
        </div>
    );
}

export default DepositWithdraw;
