import React, {useContext} from 'react';
import MyAssetsInfo from "./MyAssetsInfo";
import "./MyAssets.css"
import DepositsBorrowings from "./DepositsBorrowings";
import RoundButton from "./RoundButton";
import {GlobalContext} from "./GlobalContext";
import ConnectWallet from "./ConnectWallet";

function MyAssets(props) {
    const state = useContext(GlobalContext)

    return (
        <div>
            {
                state.connected ?
                    <div className="MyAssets">
                        <h1 className="Title">My Assets</h1>
                        <div className="MyAssetsContent">
                            <MyAssetsInfo/>
                            <div className="PendingClaim">
                                <h3>Pending claim WPC</h3>
                                <RoundButton title="Claim"/>
                            </div>
                        </div>

                        <DepositsBorrowings/>
                    </div> : <ConnectWallet/>}
        </div>
    );
}

export default MyAssets;
