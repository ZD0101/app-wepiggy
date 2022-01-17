import React from 'react';
import {Twitter} from "@mui/icons-material";
import "./FooterOld.css"
import {FaDiscord, FaMedium, FaMediumM, FaTelegram, FaTwitter} from "react-icons/fa";

function FooterOld(props) {
    return (
        <div className="Footer">
            <div>
                <img width={100} src="data:image/png;base64,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" alt=""/>
            </div>
            <div className="FooterIcons">
                <div className="MediaIcon">
                    <FaMediumM size={20}/>
                </div>
                <div className="MediaIcon">
                    <FaDiscord size={20}/>
                </div>
                <div className="MediaIcon">
                    <FaTwitter size={20}/>
                </div>
                <div className="MediaIcon">
                    <FaTelegram size={20}/>
                </div>
            </div>
        </div>
    );
}

export default FooterOld;