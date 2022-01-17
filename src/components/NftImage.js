import React from 'react';
import "./NftImage.css"
import ActionButton from "./ActionButton";
import ActionButtonBig from "./ActionButtonBig";

function NftImage({image}) {
    return (
        <div className="NftPic">
            <img className="NftImagePic" src={image} alt=""/>
            <div className="NftImageInfo">
                <h3 style={{color: "#4620CC"}}>Borrowing limit 14.92 ETH</h3>
                <div className="NftImageInfoInner">
                    <h3>Borrow APR</h3>
                    <h3>19.79%</h3>
                </div>
                <ActionButtonBig borderColor="#4620CC" color="white" fontColor="#4620CC" title="SOD 23.81% APR"/>
            </div>
        </div>
    );
}

export default NftImage;
