import React, { useState, useEffect } from "react";
import { allStories } from "../data";
import { allPartners } from "../data";
import GrantCard from "../components/GrantCard/GrantCard";
import StoryCard from "../components/StoryCard/StoryCard";
import PartnerCard from "../components/PartnerCard/PartnerCard";
import Hero from "../components/Hero/Hero";

function HomePage() {
  const [grantList, setGrantList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}scholarships/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setGrantList(data);
      });
  }, []);

  return (
    <div className="main-background">
      <Hero />
      <div class="h1-featured-g">
        <h1>Featured Grants</h1>
      </div>
      <div id="grant-list">
        {grantList.map((grantData, index) => {
          if (index > 2) return null;
          return <GrantCard key={index} grantData={grantData} />;
        })}
      </div>

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
