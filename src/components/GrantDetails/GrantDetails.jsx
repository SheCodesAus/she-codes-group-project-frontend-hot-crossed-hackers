import React from "react";
import "./GrantDetails.css";

function GrantDetails(props) {
    const { grantData } = props;
    return(
        <div className="details-container">
            <img src={grantData.image} alt="grant"/>
            <p id="main-title">{grantData.title}</p>
            <ul>
                <li>Organisation: {grantData.organisation}</li> <br></br>
                <li>Description: {grantData.description}</li><br></br>
                <li>More information at: {grantData.url}</li><br></br>
            </ul> 
        </div>
    );
}

export default GrantDetails;