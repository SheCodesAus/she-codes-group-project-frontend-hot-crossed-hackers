import React from "react";
import { allGrants } from "../data";
import { allStories } from "../data";
import { allPartners } from "../data";
import GrantCard from "../components/GrantCard/GrantCard";
import StoryCard from "../components/StoryCard/StoryCard";
import PartnerCard from "../components/PartnerCard/PartnerCard";
import Hero from "../components/Hero/Hero"


function HomePage() {
    return (

        <div>
            <Hero />
            <div id="h1-home">
                <h1>Featured Grants</h1>
            </div>
            <div id="grant-list">
            {allGrants.map((grantData, key) => {
            return <GrantCard key={key} grantData={grantData} />;
            })}
            </div>



        </div>
    );
    
}


// Function to get data from API below
// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";

// function GrantPage() {

//     const { id } = useParams();

//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}grant/${id}`)
//             .then((results) => {
//                 return results.json();
//             })
//             .then((data) => {
//                 setGrantData(data);
//             });
//     }, []);
// }
// export default GrantPage;