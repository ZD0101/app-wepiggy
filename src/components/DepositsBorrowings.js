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
                    <h2 onClick={() => setDeposits(true)} className={deposits ? "Title Active" : "Title"}>Deposits</h2>
                    <h2 onClick={() => setDeposits(false)} className={!deposits ? "Title Active" : "Title"}>Borrowings</h2>
                </div>

                <div className="LiquidationReminder">
                    <NotificationsActiveIcon/>
                    Liquidation Reminder Settings
                </div>
            </div>
            <hr/>
            <div className="Content">
                <img width={300} src="https://wepiggy.static.fortop.site/app/static/placeholder.d54a0ccc.png"/>
                {deposits ? <Deposits/> : <Borrowings/>}
            </div>
        </div>
    );
}

export default DepositsBorrowings;
