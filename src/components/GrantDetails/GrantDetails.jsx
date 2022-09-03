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
        </Link>
        </div>
    );
}

export default GrantDetails;