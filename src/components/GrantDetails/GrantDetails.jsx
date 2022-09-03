import React from "react";
import { Link } from "react-router-dom";
import "./GrantDetails.css";

function GrantDetails(props) {
    const { grantData } = props;
    return(
        <div className="details-data">
        <Link to={`/grant/${grantData.id}`}>
        <img src={grantData.image}/>
        <h3>{grantData.title}</h3>
        <p>Organisation: {grantData.organisation}</p>
        <p>Description: {grantData.description}</p>
        <p>More information at: {grantData.url}</p>
        </Link>
        </div>
    );
}

export default GrantDetails;