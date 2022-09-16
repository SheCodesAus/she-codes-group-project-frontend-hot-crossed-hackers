import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteCard from "../components/FavoriteCard/FavoriteCard";



function AccountPage() {
    const username = window.localStorage.getItem("username")
    const [userData, setUserData] = useState("");
    const [userFavoriteData, setUserFavoriteData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
            .then(res => res.json())
            .then(data => { setUserData(data) ; setUserFavoriteData(data.favorites) })
    }, [username])


    return (
        <div>
            <h2 id="project-title">{userData.username} </h2>
            <h3>Your Saved Favorites:</h3> 
                    
                    {userFavoriteData[0] ?

                            <div>
                            {userFavoriteData.map((favoriteData, index) => {
                                return (
                                <ul index={index}>
                                    <FavoriteCard favoriteData={favoriteData} />
                                </ul>
                                )
                            })}
                            </div>
                        : 'No Favorite Scholarships yet, save the first!'}  



            <div id="project-page-container-bottom">
                <Link className="button" to="/grants">View More Scholarships</Link>
            </div>
        </div>


    )

}

export default AccountPage;
