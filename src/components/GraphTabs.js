import React, {useContext, useEffect, useState} from 'react';
import {Tabs, Tab, Box} from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import {GlobalContext} from "./GlobalContext";
import DepositChart from "./DepositChart";
import BorrowChart from "./BorrowChart";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

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

function GraphTabs(props) {

    const state = useContext(GlobalContext)

    const size = useWindowSize();

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        if (size.prevWidth > 850 && size.width <= 850) {
            setDimensions({width: window.innerWidth, height: window.innerHeight})
            console.log(dimensions)
        }
        if (size.prevWidth < 950 && size.width >= 950) {
            setDimensions({width: window.innerWidth, height: window.innerHeight})
            console.log(dimensions)
        }
    }, [size])

    const theme = useTheme();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleChangeIndex = (index) => {
        setSelectedTab(index);
    };

    return (
        <div className="GraphTabs">
            <Box>
                <Tabs style={{width: 500}}
                    value={selectedTab}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                   <Tab label="Deposit Details"/>
                   <Tab label="Borrow Details"/>
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={selectedTab}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={selectedTab} index={0} dir={theme.direction}>
                        <div className="CoinChart">
                            <DepositChart/>
                        </div>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={1} dir={theme.direction}>
                        <div className="CoinChart">
                            <BorrowChart/>
                        </div>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div>
    );
}

export default GraphTabs;
