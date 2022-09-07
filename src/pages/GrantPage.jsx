// import React from "react";
// import { allGrants } from "../data";
// import GrantDetails from "../components/GrantDetails/GrantDetails";
// import { useParams} from 'react-router-dom'

// function GrantPage() {
//     const { id } = useParams();
//     return (

//         <div>
//             <div>
//                 <GrantDetails key="1" grantData={allGrants[id]} />
        
//             </div>

//         </div>
//     );
    
// }

// export default GrantPage;

// important {allGrants[id]} is going to be replaced with fetch request




// import React from "react";
// import "./GrantCard.jsx";
// import { oneGrant } from "../data";


// function GrantPage() {
//     return (
//     <div>
//     <h2>{oneGrant.title}</h2>
//     </div>
//     );
// }
// export default GrantPage;

// Function to get data from API below
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GrantDetails from "../components/GrantDetails/GrantDetails";

function GrantPage() {
    const { id } = useParams();
    const [grantData, setGrantData] = useState({})
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}scholarships/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setGrantData(data);
            });
    }, []);

    return (
        <GrantDetails grantData={grantData}/>
    )
}
export default GrantPage;