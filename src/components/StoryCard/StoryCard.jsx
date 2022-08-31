import React from "react";
import { Link } from "react-router-dom";
import "./StoryCard.css";
function StoryCard(props) {
    const { storyData } = props;
    return(
        <div className="story-card">
        <Link to={`/story/${storyData.id}`}>
        <img src={storyData.image}/>
        <h3>{storyData.title}</h3>
        </Link>
        </div>
    );
}

export default StoryCard;