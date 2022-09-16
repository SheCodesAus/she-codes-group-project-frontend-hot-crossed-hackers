import React from "react";
import { Link } from "react-router-dom";
import "./FavoriteCard.css";
function FavoriteCard(props) {
    const { favoriteData } = props;
    return(
        <div className="grant-card">
            <Link to={`/grant/${favoriteData.id}`}>
                <img src={favoriteData.image} alt="grant"/>
                <h3>{favoriteData.title}</h3>
            </Link>
        </div>
    );
}

export default FavoriteCard;