import React from "react";
import { Link } from "react-router-dom";
import "./GrantCard.css";
function GrantCard(props) {
    const { grantData } = props;
    return(
        <div className="grant-card">
            <Link to={`/grant/${grantData.id}`}>
                <img src={grantData.image} alt="grant"/>
                <h3>{grantData.title}</h3>
            </Link>
        </div>
    );
}

export default GrantCard;