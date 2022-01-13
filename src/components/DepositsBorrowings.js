import React, {useState} from 'react';
import "./DepositBorrowings.css"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Deposits from "./Deposits";
import Borrowings from "./Borrowings";

function DepositsBorrowings(props) {

    const [deposits, setDeposits] = useState(true)


    return (
        <div>
            <div className="Actions">
                <div className="ActionButtons">
                    <h1 onClick={() => setDeposits(true)} className={deposits ? "Title Active" : "Title"}>Deposits</h1>
                    <h1 onClick={() => setDeposits(false)} className={!deposits ? "Title Active" : "Title"}>Borrowings</h1>
                </div>


                <div className="LiquidationReminder">
                    <NotificationsActiveIcon/>
                    Liquidation Reminder Settings
                </div>
            </div>
            <hr/>
            <div className="Content">
                {deposits ? <Deposits/> : <Borrowings/>}
            </div>
        </div>
    );
}

export default DepositsBorrowings;
