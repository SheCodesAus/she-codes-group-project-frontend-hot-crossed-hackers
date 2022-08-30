import React, { useState, useEffect } from "react";
import { allGrants } from "../data";
import GrantCard from "../components/GrantCard/GrantCard";

function HomePage() {
    return (
        <div id="grant-list">
        {allGrants.map((grantData, key) => {
        return <GrantCard key={key} grantData={grantData} />;
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