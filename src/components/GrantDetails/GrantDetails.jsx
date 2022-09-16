import React, { useState, useEffect} from "react";
import "./GrantDetails.css";
import { Link,  useNavigate  } from "react-router-dom";

function GrantDetails(props) {
    const { grantData } = props;
    const token = window.localStorage.getItem("token")
    const navigate = useNavigate();

    const username = window.localStorage.getItem("username")
    const [userData, setUserData] = useState( {favorites: []});

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
            .then(res => res.json())
            .then(data => { console.log(data) ;setUserData(data) })
    }, [username])

    const handleSave = (e) => {
        {
            fetch(
                `${process.env.REACT_APP_API_URL}scholarships/favorites/${grantData.id}/`, {
                method: "post",
                headers: {
                    'Authorization': `Token ${token}`,
                    "Content-Type": "application/json"
                }
                
            })
                .then(res => {
                    if (res.ok) { console.log("HTTP request successful"); navigate("/grants") }
                    else { console.log("HTTP request unsuccessful") }
                })
        }
    };

    const handleDelete = (e) => {
        {
            fetch(
                `${process.env.REACT_APP_API_URL}scholarships/favorites/${grantData.id}/`, {
                method: "delete",
                headers: {
                    'Authorization': `Token ${token}`,
                    "Content-Type": "application/json"
                }
            })
                .then(res => {
                    if (res.ok) { console.log("HTTP request successful"); navigate("/grants") }
                    else { console.log("HTTP request unsuccessful") }
                })
        }
    };

    return (
    <div className="details-container">
        <img id="details-image" src={grantData.image} alt="grant" />
        <p id="main-title">{grantData.title}</p>
        <ul>
        <a>Organisation: {grantData.organisation}</a> 
        <br></br>
        <br></br>
        <a>Description: {grantData.description}</a>
        <br></br>
        <br></br>
        <a>Eligibility: {grantData.eligibility}</a>
        <br></br>
        <br></br>

<div className="container-url">
<div>
        {window.localStorage.getItem('token') ?
        <a href={grantData.url}>
            <button className="save-btn">Click Here To Find Out More!</button>
        </a> : <Link to="/signup">Sign Up to Apply!</Link>}

</div>
        {window.localStorage.getItem('token') ?
<div>
        
            {userData.favorites.includes(grantData.id) ? (
        <button onClick={handleDelete} className="save-btn">
        UNSAVE
        </button>
) : (
        <button onClick={handleSave} className="save-btn">
        SAVE
        </button>
)}
</div>

: null}


</div>



        <br></br>
        </ul>
    </div>
    );
}

export default GrantDetails;
