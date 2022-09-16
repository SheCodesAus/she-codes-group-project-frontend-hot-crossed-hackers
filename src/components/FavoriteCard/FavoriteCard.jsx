import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FavoriteCard.css";

function FavoriteCard(props) {
    const { favoriteData } = props;
    const [scholarshipData, setScholarshipsData] = useState( {image: "", title: ""});

    useEffect(() => {
{
            fetch(`${process.env.REACT_APP_API_URL}scholarships/${favoriteData}`)
                .then((results) => { return results.json(); })
                .then((data) => { setScholarshipsData(data); console.log(data)});
        }

    }, [favoriteData]);

    return(
        <div className="grant-card">
            <Link to={`/grant/${favoriteData}`}>
                <img src={scholarshipData.image} alt="grant"/>
                <h3>{scholarshipData.title}</h3>
            </Link>
        </div>
    );
}

export default FavoriteCard;