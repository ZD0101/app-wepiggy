import React from 'react';
import "./SidebarButton.css"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {NavLink} from "react-router-dom";

function SidebarButton({title, link, icon}) {
    return (
        <div className="SidebarButton">
            <div className="SidebarButtonContent">
                {icon}
                <p className="SidebarButtonLink" href="">{title}</p>
            </div>
        </div>
    );
}

export default SidebarButton;
