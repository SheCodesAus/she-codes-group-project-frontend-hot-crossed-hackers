import React from "react";
import "./PartnerCard.css";

function PartnerCard(props) {
    const { partnerData } = props;
    return(
        <div className="partner-card">
            <img src={partnerData.image} alt="partner"/>
        </div>
    );
}

export default PartnerCard;