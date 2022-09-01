import React from "react";
import "./StoryCard.css";
import { Stories } from "../data";

function StoryCard(props) {
    const { Stories } = props;
    return(
        <div className="story-card">
        <img src={Stories.image}/>
        <h3>{Stories.title}</h3>
        </div>
    );
}

export default StoryCard;