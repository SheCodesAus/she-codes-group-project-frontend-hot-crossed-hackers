import React from "react";
import "./StoryCard.css";
import { allStories } from "../data";

function StoryCard(props) {
    const { allStories } = props;
    return(
        <div className="story-card">
        <img src={allStories.image}/>
        <h3>{allStories.title}</h3>
        </div>
    );
}

export default StoryCard;