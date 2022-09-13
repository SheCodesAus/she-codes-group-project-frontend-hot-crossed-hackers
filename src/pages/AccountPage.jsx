// import React from "react";
// import Profile from "src/components/Profile/Profile.jsx";

// function AccountPage() {
//     return <Profile />;
// }
// export default AccountPage;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GrantCard from "../components/GrantCard/GrantCard";
import "../App.css"
import LoadingSpinner from "../components/LoadingSpinner";

function UserProfile() {
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState();
    const [grantList, setGrantList] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                console.log(data);
                setUserData(data);
                setLoading(false)
            });
    }, [id]);
    fetch(`${process.env.REACT_APP_API_URL}scholarships/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setGrantList(data);
            setLoading(false)
        });

    return (
            <div className="profile">
                {loading ? <LoadingSpinner /> : <div>
                <img id="user-image" src={userData.image} />

                <div className="user-info">
                    <div>
                        <h1>Hi {userData.first_name} {userData.last_name} !</h1>
                    </div>
                    <h2>Find better opportunites by keeping your profile up to date </h2>
                    <div className="user-txt">

                        <h4 className="user-info-titles"> Username:</h4>
                        <h3>{userData.username}</h3>

                        <h4 className="user-info-titles"> Email address:</h4>
                        <h3>{userData.email}</h3>

                        <h4 className="user-info-titles"> password: </h4>
                        <h3>{userData.password}</h3>

                        {/* <div>
                            <input
                                type="text"
                                id="username"
                                className="username"
                                placeholder="Enter username"
                                onChange={handleChange}
                            />
                        </div> */}

                        <h4 className="user-info-titles"> Birthday: </h4>
                        <h3>{userData.birthday}</h3>

                        <h4 className="user-info-titles"> Gender: </h4>
                        <h3>{userData.gender}</h3>

                        <h4 className="user-info-titles"> Indigenous status: </h4>
                        <h3>{userData.indigenous_status}</h3>

                        <h4 className="user-info-titles"> Vision impairment: </h4>
                        <h3>{userData.vision_impairment}</h3>

                        <h4 className="user-info-titles"> Income: </h4>
                        <h3>{userData.low_income}</h3>

                        <h4 className="user-info-titles"> ESOL: </h4>
                        <h3>{userData.esol}</h3>

                        <h4 className="user-info-titles">  Education: </h4>
                        <h3>{userData.education}</h3>

                        <h4 className="user-info-titles">  Education: </h4>
                        <h3>{userData.education}</h3>


                    </div>
                    <div className="user-info">
                        <button><Link className="editlink" to="/users/:id/edit">Edit profile</Link></button>
                    </div>
                    <div className="saved-scholarships">
                        <h2> Saved Scholarships </h2>
                        <div>
                            <div id="grant-list">
                                {grantList.map((grantData, index) => {
                                    if (index > 2) return null;
                                    return <GrantCard key={index} grantData={grantData} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }</div> 
    
    );
}

export default UserProfile;