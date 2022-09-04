import React from "react";
import { Link } from "react-router-dom";
import "./PartnerCard.css";

function PartnerCard(props) {
    const { partnerData } = props;
    return(
        <div className="partner-card">
        <Link to={`/partner/${partnerData.id}`}>
        <img src={partnerData.image} alt="partner"/>
        <h3>{partnerData.title}</h3>
        </Link>
        </div>
    );
}

export default PartnerCard;