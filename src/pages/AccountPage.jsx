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
            .then(data => { 
                if(username === data.username){
                    setUserData(data) ; setUserFavoriteData(data.favorites) }})
            .catch(err => {console.log(err)})
    }, [username])


if(window.localStorage.getItem('token')){
    return (

            <div>
            <h1 id="user-title">Welcome, {userData.username}</h1>

            <p>Complete our "About You" quiz: we will get our specialist in touch with you, sourcing you the very best Scholarships!</p>
            <button className="btn" onClick={() => setShowUpdateForm(!showUpdateForm)}>Complete Quiz</button>

            {showUpdateForm ?
            <UserQuiz/> : null}
<br></br>
            <h1>Your Saved Scholarships:</h1> 
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
                        <br></br>
                        <br></br>

            <div>
                <Link className="button" to="/grants">View More Scholarships</Link>
            </div>

        </div>
    )} 
    else { return <div><p>No data for you!</p><br></br><Link className="button" to="/login">Please Log in</Link><br></br></div>}
}

export default AccountPage;