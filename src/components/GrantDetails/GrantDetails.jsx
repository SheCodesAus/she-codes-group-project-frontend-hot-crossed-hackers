import React from "react";
import "./GrantDetails.css";

function GrantDetails(props) {
    const { grantData } = props;
    return(
        <div className="details-container">
            <img src={grantData.image} alt="grant"/>
            <p id="main-title">{grantData.title}</p>
            <p>Organisation: {grantData.organisation}</p>
            <p>Description: {grantData.description}</p>
            <p>More information at: {grantData.url}</p>  
        </div>
    );
}

export default GrantDetails;