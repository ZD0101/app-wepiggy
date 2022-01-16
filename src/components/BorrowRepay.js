import React, {useContext} from 'react';
import DepositWithdraw from "./DepositWithdraw";
import {GlobalContext} from "./GlobalContext";
import ConnectWallet from "./ConnectWallet";

function BorrowRepay(props) {
    const state = useContext(GlobalContext)

    return (
        <div>
            {
                state.connected ?
                    <div>
                        <DepositWithdraw/>
                    </div> : <ConnectWallet/>}
        </div>

    );
}

export default BorrowRepay;
