import React, {useContext, useEffect, useState} from 'react'
import "./Sidebar.css"
import SidebarButton from "./SidebarButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {NavLink} from "react-router-dom";
import InfoHeader from "./InfoHeader";
import MenuIcon from '@mui/icons-material/Menu';
import {GlobalContext} from "./GlobalContext";
import PieChartIcon from '@mui/icons-material/PieChart';
import SavingsIcon from '@mui/icons-material/Savings';
import HistoryIcon from '@mui/icons-material/History';
import PeopleIcon from '@mui/icons-material/People';
import {RiHandCoinFill} from "react-icons/ri";
import {FaCoins} from "react-icons/fa";

function Sidebar() {
    const {sidebar, setSidebar} = useContext(GlobalContext)

    const sidebarData = [
        {
            title: "Market Overview",
            link: "/markets",
            icon: <PieChartIcon/>
        },
        {
            title: "My Assets",
            link: "/dashboard",
            icon: <AccountBalanceWalletIcon/>
        },
        {
            title: "Deposit/Withdraw",
            link: "/access",
            icon: <SavingsIcon/>
        },
        {
            title: "Borrow/Repay",
            link: "/borrow",
            icon: <RiHandCoinFill size={25}/>
        },
        {
            title: "History",
            link: "/records",
            icon: <HistoryIcon/>
        },


    ]

    let lowerLinks = [
        {
            title: "DAO",
            link: "/dao",
            icon: <PeopleIcon/>
        },
        {
            title: "Liquidation Lottery",
            link: "/liq",
            icon: <FaCoins size={25}/>
        },
    ]

    return (
        <div>
            <div className='navbar'>
                <NavLink to="#" className={sidebar ? "menu-bars" : "menu-bars black"}>
                    {!sidebar && <MenuIcon onClick={() => setSidebar(!sidebar)}/>}
                </NavLink>
                <InfoHeader/>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <h1 className="title">App</h1>
                        <NavLink to="#" onClick={() => setSidebar(!sidebar)} className='menu-bars toggle-off'>
                            <MenuIcon color="white"/>
                        </NavLink>
                    </li>
                    {sidebarData.map((item, index) => {
                        return (
                            <NavLink
                                to={item.link}
                                className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                            >
                                <SidebarButton key={index} title={item.title} link={item.link} icon={item.icon}/>
                            </NavLink>
                            // <li key={index} className={item.title}>
                            //     <NavLink to={item.link}>
                            //         {item.icon}
                            //         <span>{item.title}</span>
                            //     </NavLink>
                            // </li>
                        );
                    })}
                    <div style={{ marginTop: 50,borderBottom: "1px solid gray"}}>

                    </div>
                    <div style={{marginTop: 50}}>
                        {lowerLinks.map((item, index) => {
                            return (
                                <NavLink
                                    to={item.link}
                                    className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                                ><SidebarButton title={item.title} link={item.link} icon={item.icon}/></NavLink>
                            )
                        })
                        }
                    </div>
                    <div className="BlockInfo">
                        <p>Current block 13972042</p>
                        <p>SOD: $0.02 </p>
                    </div>
                </ul>
            </nav>
        </div>

        // <div className="Sidebar">
        //     <div className="SidebarContent">
        //         <h1>Sidebar</h1>
        //         {sidebarData.map(el => {
        //             return (
        //                 <NavLink
        //                     to={el.link}
        //                     className={({isActive}) => (isActive ? 'is-active link' : 'link')}
        //                 >
        //                 <SidebarButton key={el.title} title={el.title} link={el.link}/>
        //                 </NavLink>
        //             )
        //         })}
        //
        //         <div className="BlockInfo">
        //             <p>Current block 13972042</p>
        //             <p>Your total assets on multi chains</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Sidebar
