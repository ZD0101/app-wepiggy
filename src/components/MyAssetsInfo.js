import React from 'react';
import "./MyAssetsInfo.css"

function MyAssetsInfo(props) {
    return (
        <div className="MyAssetsInfo">

            <div className="MyAssetsInfoData">
                <img className="Image" src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png"
                     alt="eth"/>
                <div className="MyAssetsInfoDataText">
                    <h3>Deposit Total</h3>
                    <h2>$ 0</h2>
                </div>
            </div>

            <div className="MyAssetsInfoData">
                <img className="Image" src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png"
                     alt="eth"/>
                <div className="MyAssetsInfoDataText">
                    <h3>Borrow Total</h3>
                    <h2>$ 0</h2>
                </div>
            </div>

            <div className="MyAssetsInfoData">
                <img className="Image" src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png"
                     alt="eth"/>
                <div className="MyAssetsInfoDataText">
                    <h3>Borrow Total</h3>
                    <h2>$ 0</h2>
                </div>
            </div>
        </div>
    );
}

export default MyAssetsInfo;
