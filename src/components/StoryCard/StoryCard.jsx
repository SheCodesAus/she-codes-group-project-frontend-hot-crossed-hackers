import React from "react";
import "./StoryCard.css";

function StoryCard(props) {
    const { storyData } = props;
    return(
        <div className="story-card">
            <img src={storyData.image} alt="person"/>
            <h3>{storyData.title}</h3>
            <p>"{storyData.story}"</p>   
        </div>
    );
}

export default StoryCard;