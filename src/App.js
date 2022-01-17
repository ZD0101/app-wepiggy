import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import InfoHeader from "./components/InfoHeader";
import Sidebar from "./components/Sidebar";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "./components/GlobalContext";
import Market from "./components/Market";
import MyAssets from "./components/MyAssets";
import CoinViewPage from "./components/CoinViewPage";
import ErrorPage from "./components/ErrorPage";
import DepositWithdraw from "./components/DepositWithdraw";
import {History} from "@mui/icons-material";
import StakingPage from "./components/StakingPage";
import NftDepositWithdraw from "./components/NftDepositWithdraw";
import Footer from "./components/Footer";

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


function App() {
    const [connected, setConnected] = useState(false)
    const [sidebar, setSidebar] = useState(true)
    const state = useContext(GlobalContext)

    const size = useWindowSize();

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        if (size.prevWidth > 720 && size.width <= 720) {
            setSidebar(false)
        }
        if (size.prevWidth < 720 && size.width >= 720) {
            setSidebar(true)
        }
    }, [size])


    return (
        // <div className="App">
        //   <div className="container">
        //     <nav>Navbar</nav>
        //     <main>Main</main>
        //     <div id="sidebar">Sidebar</div>
        //     <div id="content1">Content1</div>
        //     <div id="content2">Content2</div>
        //     <div id="content3">Content3</div>
        //     <footer>FooterOld</footer>
        //   </div>
        // </div>
        <Router>
            <GlobalContext.Provider value={{connected, setConnected, sidebar, setSidebar, dimensions}}>
                <div className={sidebar ? "App SidebarOn" : "App"}>
                    <div id="sidebar"><Sidebar/></div>
                    <div className="AppContent">
                        {/*<div id="nav"><InfoHeader/></div>*/}
                        <div id="content1">
                            <Routes>
                                <Route path="/markets" element={<Market/>}/>
                                <Route path="/dashboard" element={<MyAssets/>}/>
                                <Route exact path="/markets/:ticker" element={<CoinViewPage/>}/>
                                <Route path="*" element={<ErrorPage/>}/>
                                <Route path="/access" element={<DepositWithdraw left="Deposit" right="Withdraw"/>}/>
                                <Route path="/borrow" element={<DepositWithdraw left="Borrow" right="Repay"/>}/>
                                <Route path="/history" element={<History/>}/>

                                <Route path="/staking" element={<StakingPage/>}/>
                                <Route path="/nft-deposit-withdraw" element={<NftDepositWithdraw/>}/>
                            </Routes>
                        </div>
                        {connected && <Footer/>}
                    </div>
                </div>
            </GlobalContext.Provider>
        </Router>
    );
}

export default App;
