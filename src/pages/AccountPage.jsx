import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteCard from "../components/FavoriteCard/FavoriteCard";
import UserQuiz from "../components/UserQuiz/UserQuiz";



function AccountPage() {
    const username = window.localStorage.getItem("username")
    const [userData, setUserData] = useState("");
    const [userFavoriteData, setUserFavoriteData] = useState([]);
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
            .then(res => res.json())
            .then(data => { setUserData(data) ; setUserFavoriteData(data.favorites) })
    }, [username])


    return (
        <div>
            <h1 id="user-title">Welcome, {userData.username}</h1>

            <p>Complete our "About You" quiz: we will get our specialist in touch with you, sourcing you the very best Scholarships!</p>
            <button className="btn" onClick={() => setShowUpdateForm(!showUpdateForm)}>Complete Quiz</button>

            {showUpdateForm ?
            <UserQuiz/> : null}

            <br></br>
            <br></br>

            <h1>Your Saved Favorited Scholarships:</h1> 
            <br></br>
                    
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




            <div>
                <Link className="button" to="/grants">View More Scholarships</Link>
            </div>
        </div>
    )
}

export default AccountPage;