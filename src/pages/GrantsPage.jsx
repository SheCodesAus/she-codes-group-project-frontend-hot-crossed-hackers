// import { useParams } from "react-router-dom"; use this to test dummy data
// import { allGrants } from "../data"; use this to test dummy data
import GrantCard from "../components/GrantCard/GrantCard";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

function GrantsPage() {
    const [loading, setLoading] = useState(false)
    const [grantList, setGrantList] = useState([]);
        useEffect(() => {
            setLoading(true)
            fetch(`${process.env.REACT_APP_API_URL}scholarships/`)
            .then((results) => {
                console.log(results);
            return results.json();
            })
            .then((data) => {
            setGrantList(data);
            setLoading(false)
            });
            },[]);

        return (
            <div className="main-background">
            {loading ? <LoadingSpinner /> : <div>
                <div id= "grant-list">
                {grantList.map((grantData, key) => {
                return <GrantCard key={key} grantData={grantData} />;
                })}
                </div>
            </div>
            }</div>
        );
}
export default GrantsPage;

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
