import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./GrantCard.css";

function GrantCard(props) {
    const { grantData } = props;
    const token = window.localStorage.getItem("token")
    const navigate = useNavigate();

    const username = window.localStorage.getItem("username")
    const [userData, setUserData] = useState("");
    // const [savebutton, setSaveButton ] = useState(!!userData.favorites.includes(grantData.id))
    // const [savebutton, setSaveButton ] = useState(false)


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
            .then(res => res.json())
            .then(data => { setUserData(data); console.log(data) })
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
                    if (res.ok) { console.log("HTTP request successful"); navigate("/") }
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
                    if (res.ok) { console.log("HTTP request successful"); navigate("/") }
                    else { console.log("HTTP request unsuccessful") }
                })
        }
    };

    // if(grantData.favorites[0]) {
    //     if(grantData.favorites.includes(grantData.id)){
    //         setSaveButton(true)
    //     }
    // }

    return (
        <div className="grant-card">
            <Link to={`/grant/${grantData.id}`}>  <img src={grantData.image} className='w-100 hover-shadow' alt="grant" /></Link>
            <h3 className="grant-title">{grantData.title}</h3>

            <h4 className="date"> Closing date: {new Date(grantData.closing_date).toDateString()}</h4>
            {/* <h4 className="description" >{grantData.description}</h4> */}
            {/* <div className ="card-CTA"> */}

            <Link to={`/grant/${grantData.id}`}>
                <h4 className="see-more-btn">
                    See more
                </h4>
            </Link>
            {/* {savebutton ? 
            <button onClick={handleDelete} className="save-btn" >UNSAVE</button>
            : <button onClick={handleSave} className="save-btn" >SAVE</button>} */}

            {/* {savebutton ? <button onClick={handleDelete} className="save-btn" >UNSAVE</button> :
            <button onClick={handleSave} className="save-btn" >SAVE</button>} */}
            <button onClick={handleDelete} className="save-btn" >UNSAVE</button>
             <button onClick={handleSave} className="save-btn" >SAVE</button>

        </div >


    );
}

export default GrantCard;