import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./GrantDetails.css";

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

  
  return (
    <div className="details-container">
      <img src={grantData.image} alt="grant" />
      <p id="main-title">{grantData.title}</p>
      <ul>
        <li>Organisation: {grantData.organisation}</li> <br></br>
        <li>Description: {grantData.description}</li>
        <br></br>
        <li>Eligibility: {grantData.eligibility}</li>
        <br></br>
        <a href={grantData.url}>
          <li>More information at: {grantData.url}</li>
        </a>
        {/* <button onClick={handleSave} className="save-btn" >SAVE</button>
            <button onClick={handleDelete} className="save-btn" >UNSAVE</button> */}
        <br></br>
      </ul>

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
  );
}

export default GrantDetails;
