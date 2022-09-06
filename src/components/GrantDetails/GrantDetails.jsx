import React from "react";
import { Link } from "react-router-dom";
import "./GrantDetails.css";

function GrantDetails(props) {
    const { grantData } = props;
    return(
        <div className="details-container">
            {/* <Link to={`/grant/${grantData.id}`}> */}
                <img src={grantData.image} alt="grant"/>
                <div className="details-data">
                    <h1>{grantData.title}</h1>
                    <h2>Organisation: {grantData.organisation}</h2>
                    <h2>Description: {grantData.description}</h2>
                    <h2>More information at: {grantData.url}</h2>
                </div>
            {/* </Link> */}
        </div>
    );
}

export default GrantDetails;