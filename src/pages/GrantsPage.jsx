// import { useParams } from "react-router-dom"; use this to test dummy data
// import { allGrants } from "../data"; use this to test dummy data
import GrantCard from "../components/GrantCard/GrantCard";
import React, { useState, useEffect } from "react";



function GrantPage() {
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
            <div id= "grant-list">
            {grantList.map((grantData, key) => {
            return <GrantCard key={key} grantData={grantData} />;
            })}
            </div>
        </div>
    );
}
export default GrantPage;

// use the function below to test dummy data
// function GrantsPage() {
//     return (

//         <div>
//             <div id="h1-home">
//                 <h1>Grants</h1>
//             </div>
//             <div id="grant-list">
//             {allGrants.map((grantData, key) => {
//             return <GrantCard key={key} grantData={grantData} />;
//             })}
//             </div>

//         </div>
//     );
    
// }
// export default GrantsPage;
