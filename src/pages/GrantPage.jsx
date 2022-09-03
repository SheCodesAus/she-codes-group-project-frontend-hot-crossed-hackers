// import React from "react";
// import { oneGrant } from "../data";
// // import GrantCard from "../components/GrantCard/GrantCard";


// function GrantPage() {
//     return (
//     <div>
//     <h2>{oneGrant.title}</h2>
//     </div>
//     );
// }
// export default GrantPage;

// Function to get data from API below
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { oneGrant } from "../data";

function GrantPage() {

    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.oneGrant}grant/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setGrantData(data);
            });
    }, []);
}
export default GrantPage;