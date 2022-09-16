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
            .then(data => { 
                if(username === data.username){
                    setUserData(data) ; setUserFavoriteData(data.favorites) }})
            .catch(err => {console.log(err)})
    }, [username])


if(window.localStorage.getItem('token')){
    return (

            <div>
            <h1 id="user-title">Welcome, {userData.username}</h1>

            <h3>Your Saved Favorited Scholarships:</h3> 
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
    )} 
    else { return <div><p>No data for you!</p><br></br><Link className="button" to="/login">Please Log in</Link><br></br></div>}
}

export default AccountPage;