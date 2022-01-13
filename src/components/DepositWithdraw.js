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
                                    <h1>{left}</h1></div>
                                <div className={!isLeft ? "Button Active" : "Button"} onClick={() => setIsLeft(false)}>
                                    <h1>{right}</h1></div>
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
                                        <p>Deposit Amount</p>
                                        <p>(ETH)</p>
                                    </Box>
                                    <p>0</p>
                                </Box>

                                <hr/>

                                <Box display="flex"
                                     flexDirection="row"
                                     justifyContent="space-between"
                                     margin="20px">
                                    <p>Available Amount</p>
                                    <p>0</p>
                                </Box>
                                <hr/>

                                <Box display="flex"
                                     flexDirection="row"
                                     justifyContent="space-between"
                                     margin="20px">
                                    <p>Deposit APY</p>
                                    <p>0.22%</p>
                                </Box>

                                <Box display="flex"
                                     flexDirection="row"
                                     justifyContent="space-between"
                                     margin="20px">
                                    <p>Mining APY</p>
                                    <p>0.17%</p>
                                </Box>

                                <Box display="flex"
                                     flexDirection="row"
                                     justifyContent="space-between"
                                     margin="20px">
                                    <p>Maximum LTV Ratio</p>
                                    <p>80%</p>
                                </Box>
                            </div>

                        </div>

                    </div> : <ConnectWallet/>}
        </div>
    );
}

export default DepositWithdraw;
