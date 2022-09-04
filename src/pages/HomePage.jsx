import React, { useState, useEffect } from "react";
// import { allGrants } from "../data"; use this to test dummy data
import { allStories } from "../data";
import { allPartners } from "../data";
import GrantCard from "../components/GrantCard/GrantCard";
import StoryCard from "../components/StoryCard/StoryCard";
import PartnerCard from "../components/PartnerCard/PartnerCard";
import Hero from "../components/Hero/Hero"


function HomePage() {

    const [grantList, setGrantList] = useState([]);

        useEffect(() => {
            fetch(`${process.env.REACT_APP_API_URL}grants`)
            .then((results) => {
            return results.json();
            })
            .then((data) => {
            setGrantList(data);
            });
            },[]);

        return (
            <div>
                <Hero />
                <div id="h1-home">
                    <h1>Featured Grants</h1>
                </div>
                <div id= "grant-list">
                {grantList.map((grantData, key) => {
                return <GrantCard key={key} grantData={grantData} />;
                })}
                </div>
                {/* use function below to test dummy data */}
                {/* <div id="grant-list">
                    {allGrants.map((grantData, key) => {
                        return <GrantCard key={key} grantData={grantData} />;
                    })}}
                </div> */}
                {/* use function above to test dummy data */}
                <div id="h1-home">
                    <h1>Success Stories</h1>
                </div>
                <div id="story-list">
                    {allStories.map((storyData, key) => {
                        return <StoryCard key={key} storyData={storyData} />;
                    })}
                </div>

                <div id="h1-home">
                    <h1>Our Partners</h1>
                </div>
                <div id="partner-list">
                    {allPartners.map((partnerData, key) => {
                        return <PartnerCard key={key} partnerData={partnerData} />;
                    })}
                </div>
            </div>
    );

}

export default HomePage;