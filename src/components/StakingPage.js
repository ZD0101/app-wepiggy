import React from 'react';
import NftImage from "./NftImage";
import "./StakingPage.css"

function StakingPage(props) {
    return (
        <div className="StakingRoot">
            <h1>NFT Images</h1>
            <div className="StakingPage">
                <div className="NftImages">
                    <NftImage
                        image="https://lh3.googleusercontent.com/3biU8VzHLDdC8GWPrEWssTd-DAo39EAAGKywJfIbhbu4AP-btsvS7p1M4vxgMldyfEwADLMysbysEppVRI-alVjYure9m_xuZYk517Y=w600"/>
                    <NftImage
                        image="https://lh3.googleusercontent.com/svjZAR4frNTkZhD-KQB_YPafgtmBxx23ecZefkQju2bsiy03y5uqcb6eqOLnpWW2oRGUvOlVJ_PQ4wvyIWS7tF6gsuCTPKQYak2CpQ=w600"/>
                    <NftImage
                        image="https://lh3.googleusercontent.com/NdQVTxXFDcBFYo1NjcuYK0k472Jnh702gxFX7uNtkCTqdy3dMRTZw6yz7gB4Bz5pWrf9ILCKU6ueDbtY0YxHZkeqDoBEZsMzvkt6lj0=w600"/>
                </div>
            </div>
        </div>
    );
}

export default StakingPage;
