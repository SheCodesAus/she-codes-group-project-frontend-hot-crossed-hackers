import React, { useState, useEffect } from "react";
import { allStories } from "../data";
import Stories from "../components/Stories/StoryCard";

function StoryList() {
return (
    <div id="story-list">
    {allStories.map((storyData, key) => {
    return <StoryCard key={key} storyData={storyData} />;
})}
</div>
);

}


export default StoryList;