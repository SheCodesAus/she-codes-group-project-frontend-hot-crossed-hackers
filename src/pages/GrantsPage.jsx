import React from "react";
import { allGrants } from "../data";
import GrantCard from "../components/GrantCard/GrantCard";

function GrantsPage() {
    return (

        <div>
            <div id="h1-home">
                <h1>Grants</h1>
            </div>
            <div id="grant-list">
            {allGrants.map((grantData, key) => {
            return <GrantCard key={key} grantData={grantData} />;
            })}
            </div>

        </div>
    );
    
}

export default GrantsPage;



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