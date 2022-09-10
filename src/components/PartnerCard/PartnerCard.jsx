import React from "react";
import "./PartnerCard.css";

function PartnerCard(props) {
    const { partnerData } = props;
    return(
        <div className="partner-card">
            <a href={partnerData.url}><img src={partnerData.image} alt="partner"/></a>
        </div>
    );
}

export default PartnerCard;