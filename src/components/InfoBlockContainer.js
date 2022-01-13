import React from 'react';
import InfoBlock from "./InfoBlock";
import "./InfoBlockContainer.css"

function InfoBlockContainer(props) {
    return (
        <div className="InfoBlockContainer">
            <InfoBlock title="Deposit Market Size" price="42,112,053.82"/>
            <InfoBlock title="Borrow Market Size" price="13,538,422.82"/>
            <InfoBlock title="Total NFT Locked Value" price="28,232,257.62"/>
        </div>
    );
}

export default InfoBlockContainer;
