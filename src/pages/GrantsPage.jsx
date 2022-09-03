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