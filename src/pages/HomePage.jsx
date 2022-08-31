import React, { useState, useEffect } from "react";
import { allGrants } from "../data";
import { Stories } from "../data";
import GrantCard from "../components/GrantCard/GrantCard";
import StoryCard from "../components/StoryCard/StoryCard";

function HomePage() {
    return (
        <div id="grant-list">
        {allGrants.map((grantData, key) => {
        return <GrantCard key={key} grantData={grantData} />;
    })}
    </div>
    );

}

function StoryList() {
return (
    <div id="story-list">
    {Stories.map((storyData, key) => {
    return <StoryCard key={key} storyData={storyData} />;
})}
</div>
);

}

    



// function to get grants from the API below

// function HomePage() {
//     const [grantList, setgrantList] = useState([]);

//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}grants`)
//         .then((results) => {
//         return results.json();
//         })
//         .then((data) => {
//         setgrantList(data);
//         });
//         },[]);

//     return (
//         <div id= "grant-list">
//         {grantList.map((grantData, key) => {
//         return <grantCard key={key} grantData={grantData} />;
//         })}
//         </div>
//     );
// }

export default HomePage;
export StoryList;