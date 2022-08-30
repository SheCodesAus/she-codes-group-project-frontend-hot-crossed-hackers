import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function GrantsPage() {

    const [grantData, setGrantData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}grants/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setGrantData(data);
            });
    }, []);
    return (
        <div>
            <h2>{grantData.title}</h2>
            <h3>Created at: {grantData.date_created}</h3>
            <h3>{`Status: ${grantData.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {grantData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default GrantsPage;