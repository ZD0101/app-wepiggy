import React, {useEffect, useState} from 'react'
import "./Sidebar.css"
import SidebarButton from "./SidebarButton";
import MenuIcon from '@mui/icons-material/Menu';
import {Box} from "@mui/material";

export const Sidebar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    return (

        <div className={toggle ? "Sidebar Full" : "Sidebar Small"}>
            <div className="ToggleMenu" onClick={handleToggle}>
                <MenuIcon/>
            </div>
            <div className="SidebarContent">
                <div>
                    <Box display="flex" justifyContent="space-evenly" alignItems="center">
                        <h1 className="SidebarTitle">Sidebar</h1>
                        <div className="ToggleMenu" onClick={handleToggle}>
                            <MenuIcon/>
                        </div>
                    </Box>
                    <SidebarButton title="Market Overview" link="/markets"/>
                    <SidebarButton title="My Assets" link="/dashboard"/>
                    <SidebarButton title="Deposit/Withdraw" link="/access"/>
                    <SidebarButton title="Borrow/Repay" link="/borrow"/>
                    <SidebarButton title="History" link="/records"/>
                    <SidebarButton title="FAQ" link="/faq"/>
                    <SidebarButton title="DAO" link="/dao"/>
                    <SidebarButton title="Liquidation Lottery" link="/liquidation-lottery"/>
                </div>
                <div className="BlockInfo">
                    <p>Current block 13972042</p>
                    <p>Your total assets on multi chains</p>
                </div>
            </div>
        </div>
    )
}
